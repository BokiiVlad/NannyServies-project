"use client";
import { useEffect, useState, useCallback } from "react";
import { auth, db } from "../firebase.js";
import {
  doc,
  getDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { RotatingLines } from "react-loader-spinner";
import NannyCard from "../components/NannyCard/NannyCard.jsx";
import HeaderMain from "../components/HeaderMain/HeaderMain.jsx";

const FavoriteNanniesList = () => {
  const [nannies, setNannies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFavorites = useCallback(async (uid) => {
    setLoading(true);
    try {
      const userRef = doc(db, "users", uid);
      const userSnap = await getDoc(userRef);
      const favoriteIds = userSnap.data()?.favorites || [];

      if (favoriteIds.length === 0) {
        setNannies([]);
        return;
      }

      const batches = [];
      for (let i = 0; i < favoriteIds.length; i += 10) {
        const batchIds = favoriteIds.slice(i, i + 10);
        const q = query(
          collection(db, "babysitters"),
          where("__name__", "in", batchIds)
        );
        batches.push(getDocs(q));
      }

      const results = await Promise.all(batches);
      const data = results.flatMap((snapshot) =>
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );

      setNannies(data);
    } catch (err) {
      console.error("Failed to fetch favorite nannies:", err);
      setNannies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) fetchFavorites(user.uid);
      else {
        setNannies([]);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [fetchFavorites]);

  return (
    <div className="pb-[100px]">
      <HeaderMain />

      {loading && (
        <div className="flex justify-center items-center mt-[100px]">
          <RotatingLines
            strokeColor="#103931"
            strokeWidth="4"
            animationDuration="0.75"
            width="60"
            visible={true}
          />
        </div>
      )}

      {!loading && nannies.length === 0 && (
        <p className="text-center mt-[100px] text-2xl">
          No favorite nannies yet.
        </p>
      )}

      {!loading && nannies.length > 0 && (
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
      )}
    </div>
  );
};

export default FavoriteNanniesList;
