"use client";
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React from "react";

const RegisterModal = ({ isOpen = true, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name });
      onClose?.();
      form.reset();
    } catch (error) {
      console.error("Error creating user:", error.message);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => onClose?.()}
    >
      <div
        className="w-[565px] bg-[#fbfbfb] p-[64px] rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="font-medium text-[40px] leading-[1.2] tracking-[-0.02em] text-[#11101c] mb-5">
          Registration
        </h2>
        <p className="text-[16px] leading-[1.25] text-[rgba(17,16,28,0.5)] mb-10">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>

        <form
          className="flex flex-col w-full max-w-[438px] mb-10"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="mb-[18px] border border-[rgba(17,16,28,0.1)] rounded-[12px] px-4 py-4 w-full text-[#11101c] focus:outline-none focus:border-[var(--bg-div)] placeholder:text-[rgba(17,16,28,0.6)] placeholder:text-[16px]"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="mb-[18px] border border-[rgba(17,16,28,0.1)] rounded-[12px] px-4 py-4 w-full text-[#11101c] focus:outline-none focus:border-[var(--bg-div)] placeholder:text-[rgba(17,16,28,0.6)] placeholder:text-[16px]"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="mb-10 border border-[rgba(17,16,28,0.1)] rounded-[12px] px-4 py-4 w-full text-[#11101c] focus:outline-none focus:border-[var(--bg-div)] placeholder:text-[rgba(17,16,28,0.6)] placeholder:text-[16px]"
            required
          />

          <button
            type="submit"
            className="bg-[#103931] text-white font-medium rounded-[30px] w-full h-[52px] hover:bg-[#0d2b26] transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
