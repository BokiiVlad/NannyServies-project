"use client";
import { auth } from "../../firebase.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useEffect } from "react";
import PasswordInput from "../PasswordInput/PasswordInput.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const RegisterModal = ({ onClose }) => {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(userCredential.user, { displayName: data.name });
      onClose?.();
      reset();
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
        className="relative w-[565px] bg-[#fbfbfb] p-[64px] rounded-2xl shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <svg
          onClick={() => onClose?.()}
          className="absolute top-6 right-6 stroke-[#11101c] stroke-[2.5] cursor-pointer"
          width="32"
          height="32"
        >
          <use href="/icons/sprite.svg#icon-x"></use>
        </svg>

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
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className=" border border-[rgba(17,16,28,0.1)] rounded-[12px] px-4 py-4 w-full text-[#11101c] focus:outline-none focus:border-[var(--bg-div)] placeholder:text-[#11101c] placeholder:text-[16px] placeholder:font-normal placeholder:leading-[1.25]"
          />
          {errors.name && (
            <p className="ml-1 mt-1 text-red-500 text-sm mb-[18px]">
              {errors.name.message}
            </p>
          )}
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="mt-[18px] border border-[rgba(17,16,28,0.1)] rounded-[12px] px-4 py-4 w-full text-[#11101c] focus:outline-none focus:border-[var(--bg-div)] placeholder:text-[#11101c] placeholder:text-[16px] placeholder:font-normal placeholder:leading-[1.25]"
          />
          {errors.email && (
            <p className="ml-1 mt-1 text-red-500 text-sm">
              {errors.email.message}
            </p>
          )}
          <PasswordInput {...register("password")} />{" "}
          {errors.password && (
            <p className="ml-1 mt-1 text-red-500 text-sm mb-[18px]">
              {errors.password.message}
            </p>
          )}
          <button
            type="submit"
            className="mt-10 bg-[var(--bg-div)] text-white font-medium rounded-[30px] w-full h-[52px] hover:bg-[var(--hover-color) transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
