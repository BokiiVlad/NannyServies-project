"use client";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";

const AuthNav = ({ onOpenRegister, onOpenLogin }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onOpenLogin}
        className="border border-[rgba(251,251,251,0.4)] rounded-[30px] px-[37px] py-[12px] w-[124px] h-[48px] text-[#fbfbfb] hover:bg-[rgba(251,251,251,0.2)] transition-colors duration-300"
      >
        Log In
      </button>

      <button
        onClick={onOpenRegister}
        className="py-[14px] px-10 rounded-[30px] w-[168px] h-12 bg-[var(--bg-div)] text-[#fbfbfb] hover:bg-[#fff] hover:text-[var(--bg-div)] transition-colors duration-300 inline-flex items-center justify-center"
      >
        Registration
      </button>
      <ThemeToggle />
    </div>
  );
};

export default AuthNav;
