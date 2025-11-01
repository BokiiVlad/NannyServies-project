"use client";
import Link from "next/link";
import { useAuth } from "@/hooks/useAuth.js";

const Hero = ({ setIsLoginOpen }) => {
  const { user, loading } = useAuth();

  if (loading) return null;

  return (
    <section className="bg-[#fbfbfb]">
      <div
        className="pl-24 relative w-[1376px] h-[736px] my-8 mx-auto rounded-[30px] overflow-hidden border border-[rgba(251,251,251,0.4)] "
        style={{ backgroundColor: "var(--bg-div)" }}
      >
        <div className="absolute w-[284px] h-[118px] bg-[#fbfbfb] rounded-[20px] bottom-[50px] right-[50px] z-51 flex items-center justify-center gap-4">
          <div className="w-[54px] h-[54px] bg-[var(--bg-div)] rounded-[13px] flex items-center justify-center">
            <svg width="20" height="15" className="fill-white">
              <use href="/icons/sprite.svg#icon-check"></use>
            </svg>
          </div>{" "}
          <div className="flex flex-col">
            <p className="font-normal text-[16px] text-[rgba(17,16,28,0.5)]">
              Experienced nannies
            </p>
            <p className="font-bold text-[24px] text-[#11101c]">15,000</p>
          </div>
        </div>
        <div className="mt-[251px] max-w-[517px]">
          <h1 className="font-medium text-[70px] leading-[100%] tracking-[-0.03em] text-[#fbfbfb] mb-7">
            Make Life Easier for the Family:
          </h1>
          <p className="font-normal text-[28px] leading-[107%] tracking-[-0.02em] text-[#fbfbfb]">
            Find Babysitters Online for All Occasions
          </p>
          {user ? (
            <Link
              href="/nannies"
              className="hover:bg-[rgba(251,251,251,0.2)] transition-colors duration-300 inline-flex items-center justify-center gap-[18px] mt-16 border border-[rgba(251,251,251,0.4)] rounded-[30px] px-[37px] py-[12px] w-[229px] h-[48px] font-medium text-[20px] leading-[120%] tracking-[-0.01em] text-[#fbfbfb]"
            >
              Get started
              <svg
                width="14"
                height="16"
                className="fill-current text-[#fbfbfb]"
              >
                <use href="/icons/sprite.svg#icon-arrow-top"></use>
              </svg>
            </Link>
          ) : (
            <button
              onClick={() => setIsLoginOpen(true)}
              className="hover:bg-[rgba(251,251,251,0.2)] transition-colors duration-300 inline-flex items-center justify-center gap-[18px] mt-16 border border-[rgba(251,251,251,0.4)] rounded-[30px] px-[37px] py-[12px] w-[229px] h-[48px] font-medium text-[20px] leading-[120%] tracking-[-0.01em] text-[#fbfbfb]"
            >
              Get started
              <svg
                width="14"
                height="16"
                className="fill-current text-[#fbfbfb]"
              >
                <use href="/icons/sprite.svg#icon-arrow-top"></use>
              </svg>
            </button>
          )}
        </div>

        <div className="absolute top-0 right-0 h-full w-[699px]">
          <img
            src="/images/RectangleNormal.jpg"
            alt="Baby"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
