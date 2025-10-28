"use client";
import { useState, forwardRef } from "react";

const PasswordInput = forwardRef(({ ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="relative">
      <input
        type={showPassword ? "text" : "password"}
        ref={ref}
        {...props}
        placeholder="Password"
        className="mt-[18px] border border-[rgba(17,16,28,0.1)] rounded-[12px] px-4 py-4 w-full focus:outline-none focus:border-[var(--bg-div)] placeholder:text-[#11101c] placeholder:text-[16px] placeholder:font-normal placeholder:leading-[1.25] text-black"
      />

      <button
        type="button"
        onClick={togglePassword}
        className="absolute right-[18px] bottom-[15px] bg-white rounded-full p-1"
      >
        {showPassword ? (
          <svg width="20" height="20" stroke="black" fill="white">
            <use href="/icons/sprite.svg#icon-eye-off"></use>
          </svg>
        ) : (
          <svg width="20" height="20" stroke="black" fill="white">
            <use href="/icons/sprite.svg#icon-eye"></use>
          </svg>
        )}
      </button>
    </div>
  );
});

export default PasswordInput;
