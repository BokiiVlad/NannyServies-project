import Link from "next/link.js";

const AuthNav = () => {
  return (
    <div className="flex gap-2">
      <Link
        className="border border-[rgba(251,251,251,0.4)] rounded-[30px] px-[37px] py-[12px] w-[124px] h-[48px]"
        href="/login"
      >
        Log In
      </Link>
      <Link
        className="py-[14px] px-10 rounded-[30px] w-42 h-12 bg-[#fff] bg-[var(--bg-div)]"
        href="/register"
      >
        Registration
      </Link>
    </div>
  );
};

export default AuthNav;
