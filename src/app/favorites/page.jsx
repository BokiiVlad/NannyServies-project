"use client";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase.js";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import NannyCard from "../components/NannyCard/NannyCard.jsx";
import HeaderMain from "../components/HeaderMain/HeaderMain.jsx";
import { RotatingLines } from "react-loader-spinner";

const FavoriteNanniesList = () => {
  const [nannies, setNannies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserId(user?.uid || null);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!userId) return;
    const fetchFavorites = async () => {
      setLoading(true);
      try {
        const userRef = doc(db, "users", userId);
        const userSnap = await getDoc(userRef);
        const favoriteIds = userSnap.data()?.favorites || [];

        if (!favoriteIds.length) {
          setNannies([]);
          return;
        }

        const babysittersRef = collection(db, "babysitters");
        const q = query(
          babysittersRef,
          where("__name__", "in", favoriteIds.slice(0, 10))
        );
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNannies(data);
      } catch (err) {
        console.error(err);
        setNannies([]);
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, [userId]);

  return (
    <div className="pb-[100px]">
      <HeaderMain />
      {loading ? (
        <div className="flex justify-center items-center h-[calc(100vh-100px)]">
          <RotatingLines
            strokeColor="#103931"
            strokeWidth="4"
            animationDuration="0.75"
            width="60"
            visible={true}
          />
        </div>
      ) : nannies.length ? (
        <ul className="flex flex-col items-center gap-8 mt-[64px] mb-[64px]">
          {nannies.map((nanny) => (
            <li
              key={nanny.id}
              className="relative bg-[#FBFBFB] rounded-[30px] p-6 w-[1184px] min-h-[318px]"
            >
              <NannyCard {...nanny} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center mt-[100px] text-2xl">
          No favorite nannies yet.
        </p>
      )}
    </div>
  );
};

export default FavoriteNanniesList;
