"use client";
import { useAuth } from "@/hooks/useAuth.js";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.js";
import ThemeToggle from "../ThemeToggle/ThemeToggle.jsx";

const AuthNav = ({ onOpenRegister, onOpenLogin }) => {
  const { user, logout, loading } = useAuth();

  if (loading) return null;

  const handleLogout = async () => {
    await signOut(auth);
  };

  return user ? (
    <div className="flex items-center gap-6 ">
      <div className="flex font-normal text-[18px] leading-[111%] tracking-[-0.01em] text-[#fbfbfb] items-center justify-center gap-[14px]">
        <div className="rounded-[10px] bg-white w-10 h-10 flex items-center justify-center">
          <svg className="fill-[var(--bg-div)]" width="24" height="24">
            <use href="/icons/sprite.svg#icon-user"></use>
          </svg>
        </div>
        <span className="text-white font-normal mt-[3px]">
          {user.displayName}
        </span>
      </div>
      <button
        onClick={handleLogout}
        className="border border-[rgba(251,251,251,0.4)] rounded-[30px] px-[37px] py-[12px] w-[134px] h-[48px] text-[#fbfbfb] hover:bg-[rgba(251,251,251,0.2)] transition-colors duration-300"
      >
        Logout
      </button>
    </div>
  ) : (
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
    </div>
  );
};

export default AuthNav;
