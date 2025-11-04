"use client";
import { useState, useEffect, useRef } from "react";

const CustomSelect = () => {
  const [selectIsOpen, setSelectIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("A to Z");
  const selectRef = useRef(null);

  const filters = [
    { value: "a-z", label: "A to Z" },
    { value: "z-a", label: "Z to A" },
    { value: "less-10", label: "Less than 10$" },
    { value: "greater-10", label: "Greater than 10$" },
    { value: "popular", label: "Popular" },
    { value: "not-popular", label: "Not popular" },
    { value: "show-all", label: "Show all" },
  ];

  const handleFilterSelect = (value, label) => {
    setSelectedOption(label);
    setSelectIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setSelectIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={selectRef} className="relative w-[226px] ">
      <button
        onClick={() => setSelectIsOpen((prev) => !prev)}
        className="rounded-[14px] px-[18px] w-[226px] h-[48px] bg-[#103931] flex justify-between items-center text-white text-[14px] font-medium leading-[129%]"
      >
        <span>{selectedOption}</span>
        <svg
          className={`w-5 h-5 transition-transform ${
            selectIsOpen ? "rotate-180" : "rotate-0"
          }`}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 7.5L10 12.5L15 7.5"
            stroke="#FBFBFB"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {selectIsOpen && (
        <ul
          className="absolute z-[9999] mt-2 w-full bg-white border border-gray-200 rounded-[12px] shadow-lg overflow-hidden 
    transition-all duration-300 ease-in-out opacity-100 translate-y-0 py-[8px]"
        >
          {filters.map((option) => (
            <li
              key={option.value}
              onClick={() => handleFilterSelect(option.value, option.label)}
              className={`px-4 py-[6px] cursor-pointer font-normal text-[18px] leading-[111%]  ${
                selectedOption === option.label
                  ? "text-[#11101c]"
                  : "text-[rgba(17,16,28,0.3)]"
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
