"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const schema = yup.object().shape({
  address: yup.string().required("Address is required"),
  phone: yup
    .string()
    .matches(/^\+?\d{10,15}$/, "Invalid phone number")
    .required("Phone is required"),
  age: yup
    .number()
    .typeError("Enter a valid number")
    .required("Child's age is required"),
  time: yup.string().required("Time is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  parentsNames: yup.string().required("Parent's name is required"),
  comment: yup.string().required("Comment is required"),
});

const AppointmentForm = ({ onClose, nannyId, imageUrl, nannyName }) => {
  const [nannie, setNannie] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Your appointment request has been sent!");
    reset();
    onClose?.();
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    const fetchNannie = async () => {
      try {
        const docRef = doc(db, "babysitters", nannyId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setNannie({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.warn("No such nanny!");
        }
      } catch (error) {
        console.error("Error loading nanny:", error);
      }
    };

    if (nannyId) fetchNannie();
  }, [nannyId]);

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={() => onClose?.()}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-[#FBFBFB] rounded-[24px] p-[64px] w-[600px]"
      >
        <svg
          onClick={() => onClose?.()}
          className="absolute top-6 right-6 stroke-[#11101c] stroke-[2.5] cursor-pointer"
          width="32"
          height="32"
        >
          <use href="/icons/sprite.svg#icon-x"></use>
        </svg>
        <div className="mb-10">
          <p className="mb-5 font-medium text-[40px] leading-[120%] tracking-[-0.02em] text-[#11101c]">
            Make an appointment with a babysitter
          </p>
          <p className="font-normal text-[16px] leading-[125%] text-[rgba(17,16,28,0.5)]">
            Arranging a meeting with a caregiver for your child is the first
            step to creating a safe and comfortable environment. Fill out the
            form below so we can match you with the perfect care partner.
          </p>
        </div>
        <div className="flex mb-10 gap-[14px]">
          <img
            className="rounded-[15px] w-[44px] h-[44px]"
            src={imageUrl}
            alt="avatar"
          />
          <div>
            <p className="font-medium text-[12px] leading-[133%] text-[#8a8a89]">
              Your nanny
            </p>
            <p className="font-medium text-[16px] leading-[150%] text-[#11101c]">
              {nannyName}
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("address")}
            className="mb-4 mr-2 border border-[rgba(17,16,28,0.1)]  rounded-[12px] px-[18px]  py-[16px] w-[232px] h-[52px] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[125%] placeholder:text-[#11101c]"
            type="text"
            placeholder="Address"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mb-2">
              {errors.address.message}
            </p>
          )}

          <input
            {...register("phone")}
            className="mb-4  border border-[rgba(17,16,28,0.1)]  rounded-[12px] px-[18px]  py-[16px] w-[232px] h-[52px] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[125%] placeholder:text-[#11101c]"
            type="tel"
            placeholder="+380"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mb-2">{errors.phone.message}</p>
          )}

          <input
            {...register("age")}
            className="mb-4 mr-2 border border-[rgba(17,16,28,0.1)]  rounded-[12px] px-[18px]  py-[16px] w-[232px] h-[52px] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[125%] placeholder:text-[#11101c]"
            type="number"
            placeholder="Child's age"
          />
          {errors.age && (
            <p className="text-red-500 text-sm mb-2">{errors.age.message}</p>
          )}

          <input
            {...register("time")}
            className="mb-4  border border-[rgba(17,16,28,0.1)] rounded-[12px] py-[16px] px-[18px]  w-[232px] h-[52px] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[125%] placeholder:text-[#11101c]"
            type="time"
          />
          {errors.time && (
            <p className="text-red-500 text-sm mb-2">{errors.time.message}</p>
          )}

          <input
            {...register("email")}
            className="mb-4 border border-[rgba(17,16,28,0.1)] rounded-[12px] py-[16px] pl-[18px]  w-[472px] h-[52px] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[125%] placeholder:text-[#11101c]"
            type="email"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>
          )}

          <input
            {...register("parentsNames")}
            className="mb-4 border border-[rgba(17,16,28,0.1)] rounded-[12px] py-[16px] pl-[18px]  w-[472px] h-[52px] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[125%] placeholder:text-[#11101c]"
            type="text"
            placeholder="Father's or mother's name"
          />
          {errors.parentsNames && (
            <p className="text-red-500 text-sm mb-2">
              {errors.parentsNames.message}
            </p>
          )}

          <input
            {...register("comment")}
            className="border border-[rgba(17,16,28,0.1)] rounded-[12px] pt-[16px] pr-[18px] pb-[80px] pl-[18px] w-[472px] h-[116px] placeholder:font-normal placeholder:text-[16px] placeholder:leading-[125%] placeholder:text-[#11101c]"
            type="text"
            placeholder="Comment"
          />
          {errors.comment && (
            <p className="text-red-500 text-sm mb-4">
              {errors.comment.message}
            </p>
          )}

          <button
            className="text-[#FBFBFB] mt-10 rounded-[30px] py-[16px] px-[217px] w-[472px] h-[52px] bg-[var(--bg-div)] hover:bg-[var(--hover-color)] transition-colors duration-300"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};
export default AppointmentForm;
