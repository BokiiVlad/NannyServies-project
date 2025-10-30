"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";
import NannyCard from "../NannyCard/NannyCard.jsx";

const NannysList = () => {
  const [nannies, setNannies] = useState([]);

  useEffect(() => {
    const fetchNannies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "babysitters"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNannies(data);
      } catch (error) {
        console.error("Error loading nannies:", error);
      }
    };

    fetchNannies();
  }, []);

  return (
    <section>
      <ul className="flex flex-col items-center gap-8">
        {nannies.map((nanny) => (
          <li
            className="bg-[#FBFBFB] rounded-[30px] p-6 w-[1184px] h-[318px]"
            key={nanny.id}
          >
            <NannyCard {...nanny} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NannysList;
