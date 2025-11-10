"use client";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  where,
} from "firebase/firestore";
import { db } from "../../firebase.js";
import NannyCard from "../NannyCard/NannyCard.jsx";
import CustomSelect from "../CustomSelect/CustomSelect.jsx";
import { RotatingLines } from "react-loader-spinner";

const NannysList = () => {
  const PAGE_SIZE = 3;
  const [nannies, setNannies] = useState([]);
  const [lastDoc, setLastDoc] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState("a-z");
  const [loading, setLoading] = useState(false);

  const fetchNannies = async (nextPage = false) => {
    setLoading(true);
    try {
      let orderField = "name";
      let orderDirection = "asc";
      let filters = [];
      let usePagination = true;

      switch (selectedFilter) {
        case "z-a":
          orderField = "name";
          orderDirection = "desc";
          break;

        case "less-20":
          orderField = "price_per_hour";
          orderDirection = "asc";
          filters.push(where("price_per_hour", "<", 20));
          break;

        case "greater-20":
          orderField = "price_per_hour";
          orderDirection = "desc";
          filters.push(where("price_per_hour", ">", 20));
          break;

        case "popular":
          orderField = "rating";
          orderDirection = "desc";
          filters.push(where("rating", ">=", 4.7));
          break;

        case "not-popular":
          orderField = "rating";
          orderDirection = "asc";
          break;

        case "show-all":
          orderField = "name";
          orderDirection = "asc";
          usePagination = false;
          break;

        default:
          orderField = "name";
          orderDirection = "asc";
      }

      let q;
      if (usePagination) {
        q = query(
          collection(db, "babysitters"),
          ...filters,
          orderBy(orderField, orderDirection),
          limit(PAGE_SIZE)
        );

        if (nextPage && lastDoc) {
          q = query(
            collection(db, "babysitters"),
            ...filters,
            orderBy(orderField, orderDirection),
            startAfter(lastDoc),
            limit(PAGE_SIZE)
          );
        }
      } else {
        q = query(
          collection(db, "babysitters"),
          ...filters,
          orderBy(orderField, orderDirection)
        );
      }

      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setNannies((prev) => (nextPage ? [...prev, ...data] : data));
      setLastDoc(querySnapshot.docs[querySnapshot.docs.length - 1]);
      setHasMore(usePagination && querySnapshot.docs.length === PAGE_SIZE);
    } catch (error) {
      console.error("Error loading nannies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setNannies([]);
    setLastDoc(null);
    setHasMore(true);
    fetchNannies(false);
  }, [selectedFilter]);

  return (
    <section>
      <ul className="flex flex-col items-center gap-8 mt-[64px] mb-[64px]">
        <li className="relative w-[250px] transform translate-x-[-465px] z-[9999]">
          <p className="font-medium text-[14px] leading-[129%] text-[#8a8a89] mb-2">
            Filters
          </p>
          <CustomSelect setSelectedFilter={setSelectedFilter} />
        </li>

        {nannies.map((nanny) => (
          <li
            className="relative bg-[#FBFBFB] rounded-[30px] p-6 w-[1184px] min-h-[318px]"
            key={nanny.id}
          >
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

        {loading && (
          <div className="mt-[40px] mb-[40px]">
            <RotatingLines
              strokeColor="#103931"
              strokeWidth="4"
              animationDuration="0.75"
              width="60"
              visible={true}
            />
          </div>
        )}
      </ul>
      {!loading && hasMore && (
        <div className="w-full flex justify-center ">
          <button
            onClick={() => fetchNannies(true)}
            className="rounded-[30px] px-[40px] py-[14px] w-[159px] h-[48px] bg-[#103931] text-[#fbfbfb]  hover:bg-[#145d46] transition-colors mb-[100px]"
          >
            Load more
          </button>
        </div>
      )}
    </section>
  );
};

export default NannysList;
