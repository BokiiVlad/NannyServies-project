"use client";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect } from "react";
import PasswordInput from "../PasswordInput/PasswordInput.jsx";

const LoginModal = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      form.reset();
      onClose?.();
    } catch (error) {
      console.error("Error logging user:", error.message);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => onClose?.()}
    >
      <div
        className="relative w-[565px] bg-[#fbfbfb] p-[64px] rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          onClick={() => onClose?.()}
          className="absolute top-7 right-7 stroke-[#11101c] stroke-[2.5] cursor-pointer"
          width="32"
          height="32"
        >
          <use href="/icons/sprite.svg#icon-x"></use>
        </svg>

        <h2 className="font-medium text-[40px] leading-[1.2] tracking-[-0.02em] text-[#11101c] mb-5">
          Log In
        </h2>
        <p className="text-[16px] leading-[1.25] text-[rgba(17,16,28,0.5)] mb-10">
          Welcome back! Please enter your credentials to access your account and
          continue your babysitter search.
        </p>

        <form
          className="flex flex-col w-full max-w-[438px] mb-10"
          onSubmit={handleSubmit}
        >
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="mb-[18px] border border-[rgba(17,16,28,0.1)] rounded-[12px] px-4 py-4 w-full focus:outline-none focus:border-[var(--bg-div)] placeholder:text-[#11101c] placeholder:text-[16px] placeholder:font-normal placeholder:leading-[1.25]"
            required
          />
          <PasswordInput />
          <button
            type="submit"
            className="bg-[#103931] text-white font-medium rounded-[30px] w-full h-[52px] hover:bg-[#0d2b26] transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
