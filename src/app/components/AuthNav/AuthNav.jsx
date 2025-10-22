import Link from "next/link.js";

const AuthNav = () => {
  return (
    <div className="flex gap-2">
      <Link
        href="/login"
        className="border border-[rgba(251,251,251,0.4)] rounded-[30px] px-[37px] py-[12px] w-[124px] h-[48px] text-[#fbfbfb] hover:bg-[rgba(251,251,251,0.2)] transition-colors duration-300"
      >
        Log In
      </Link>

      <Link
        href="/register"
        className="py-[14px] px-10 rounded-[30px] w-[168px] h-12 bg-[var(--bg-div)] text-[#fbfbfb] hover:bg-[#fff] hover:text-[var(--bg-div)] transition-colors duration-300 inline-flex items-center justify-center"
      >
        Registration
      </Link>
    </div>
  );
};

export default AuthNav;
