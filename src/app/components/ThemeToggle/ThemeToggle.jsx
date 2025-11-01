"use client";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "blue") {
      applyThemeColors("#0957C3", "rgba(9, 87, 195, 0.2)", "#074B9A");
      setEnabled(false);
    } else {
      applyThemeColors("#103931", "rgba(16, 57, 49, 0.2)", "#0d2b26");
      setEnabled(true);
    }
  }, []);

  const applyThemeColors = (bg, light, hover) => {
    document.documentElement.style.setProperty("--bg-div", bg);
    document.documentElement.style.setProperty("--light-color", light);
    document.documentElement.style.setProperty("--hover-color", hover);
  };

  const toggleTheme = () => {
    if (enabled) {
      applyThemeColors("#0957C3", "rgba(9, 87, 195, 0.2)", "#074B9A");
      localStorage.setItem("theme", "blue");
    } else {
      applyThemeColors("#103931", "rgba(16, 57, 49, 0.2)", "#0d2b26");
      localStorage.setItem("theme", "green");
    }
    setEnabled(!enabled);
  };

  return (
    <button
      onClick={toggleTheme}
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
        ${enabled ? "bg-[#103931]" : "bg-[#0957C3]"}
      `}
    >
      <div
        className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
          ${enabled ? "translate-x-0" : "translate-x-6"}
        `}
      ></div>
    </button>
  );
};

export default ThemeToggle;
