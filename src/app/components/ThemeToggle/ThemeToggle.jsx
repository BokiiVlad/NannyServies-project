"use client";
import { useState } from "react";

const ThemeToggle = () => {
  const [enabled, setEnabled] = useState(true);

  const toggleTheme = () => {
    const newColor = enabled ? "#0957C3" : "#103931";
    document.documentElement.style.setProperty("--bg-div", newColor);
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
