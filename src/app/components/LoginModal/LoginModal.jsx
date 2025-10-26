"use client";
import { auth } from "../../firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";

const LoginModal = ({ isOpen = false, onClose }) => {
  if (!isOpen) return null;

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="w-[565px] bg-[#fbfbfb] p-[64px] rounded-2xl shadow-lg ">
        <h2 className="font-medium text-[40px] leading-[1.2] tracking-[-0.02em] text-[#11101c] mb-5">
          Log In
        </h2>
        <p className="text-[16px] leading-[1.25] text-[rgba(17,16,28,0.5)] mb-10 ">
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
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="mb-10 border border-[rgba(17,16,28,0.1)] rounded-[12px] px-4 py-4 w-full focus:outline-none focus:border-[var(--bg-div)] placeholder:text-[#11101c] placeholder:text-[16px] placeholder:font-normal placeholder:leading-[1.25]"
            required
          />
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
