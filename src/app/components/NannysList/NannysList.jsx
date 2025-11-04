"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase.js";
import NannyCard from "../NannyCard/NannyCard.jsx";
import CustomSelect from "../CustomSelect/CustomSelect.jsx";

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
      <ul className="flex flex-col items-center gap-8 mt-[64px]">
        <li className="relative w-[250px] transform translate-x-[-465px] z-[9999]">
          <p className="font-medium text-[14px] leading-[129%] text-[#8a8a89] mb-2">
            Filters
          </p>
          <CustomSelect />
        </li>
        {nannies.map((nanny) => (
          <li
            className="relative bg-[#FBFBFB] rounded-[30px] p-6 w-[1184px] min-h-[318px]"
            key={nanny.id}
          >
            {" "}
            <svg
              className="stroke-black fill-white absolute top-6 right-6"
              width="26"
              height="26"
            >
              <use href="/icons/sprite.svg#icon-heart"></use>
            </svg>
            <NannyCard {...nanny} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default NannysList;
