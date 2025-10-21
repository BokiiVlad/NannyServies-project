import Link from "next/link";

const Hero = () => {
  return (
    <section>
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
            className="inline-block mt-16 border border-[rgba(251,251,251,0.4)] rounded-[30px] px-[37px] py-[12px] w-[229px] h-[48px] font-medium text-[20px] leading-[120%] tracking-[-0.01em] text-[#fbfbfb] text-center"
          >
            Get started
          </Link>
        </div>

        <div
          className="absolute top-0 right-0 h-full"
          style={{ width: "699px" }}
        >
          <img
            src="/images/RectangleNormal.jpg"
            alt="Hero"
            className="w-full h-full object-cover object-top"
          />
        </div>

        <hr
          className="absolute top-[88px] left-0 w-full border-t-2"
          style={{ borderColor: "rgba(251, 251, 251, 0.4)" }}
        />
        <div className="absolute rounded-[20px] w-[284px] h-[118px] bg-[#fbfbfb] right-[50px] bottom-[50px] flex  ">
          <div className="w-[54px] h-[54px] bg-[var(--bg-div)] rounded-[13px] mt-8 ml-8 mr-[16px]"></div>
          <div className="mt-8">
            <p className="font-normal text-[16px] text-[rgba(17,16,28,0.5)]">
              Experienced nannies
            </p>
            <p className="font-bold text-[24px] text-[#11101c]">15,000</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
