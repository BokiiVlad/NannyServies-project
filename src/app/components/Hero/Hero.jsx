"use client";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth.js";

const Hero = () => {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <section className="bg-[#fbfbfb]">
      <div
        className="pl-24 relative w-[1376px] h-[736px] my-8 mx-auto rounded-[30px] overflow-hidden border border-[rgba(251,251,251,0.4)]"
        style={{ backgroundColor: "var(--bg-div)" }}
      >
        <div className="mt-[251px] max-w-[517px]">
          <h1 className="font-medium text-[70px] leading-[100%] tracking-[-0.03em] text-[#fbfbfb] mb-7">
            Make Life Easier for the Family:
          </h1>
          <p className="font-normal text-[28px] leading-[107%] tracking-[-0.02em] text-[#fbfbfb]">
            Find Babysitters Online for All Occasions
          </p>
          <Link
            href="/login"
            className="hover:bg-[rgba(251,251,251,0.2)] transition-colors duration-300 inline-flex items-center justify-center gap-[18px] mt-16 border border-[rgba(251,251,251,0.4)] rounded-[30px] px-[37px] py-[12px] w-[229px] h-[48px] font-medium text-[20px] leading-[120%] tracking-[-0.01em] text-[#fbfbfb]"
          >
            Get started
            <svg width="14" height="16" className="fill-current text-[#fbfbfb]">
              <use href="/icons/sprite.svg#icon-arrow-top"></use>
            </svg>
          </Link>
        </div>

        <div className="absolute top-0 right-0 h-full w-[699px]">
          <img
            src="/images/RectangleNormal.jpg"
            alt="Hero"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
