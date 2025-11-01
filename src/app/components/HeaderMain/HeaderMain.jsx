"use client";
import Link from "next/link";
import { useState } from "react";
import AuthNav from "../AuthNav/AuthNav.jsx";
import Modals from "../Modals/Modals.jsx";

const HeaderMain = ({ isLoginOpen, setIsLoginOpen }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <header className="bg-[var(--bg-div)]">
      <div className="w-[1184px] mx-auto flex justify-between items-center text-white pt-6 pb-6">
        <p className="text-[30px] font-medium leading-[117%] tracking-[-0.02em]">
          Nanny.Services
        </p>

        <nav className="flex items-center gap-[217px]">
          <div className="flex gap-10">
            <Link href="/">Home</Link>
            <Link href="/nannies">Nannies</Link>
            <Link href="/favorites">Favorites</Link>
          </div>

          <AuthNav
            onOpenRegister={() => setIsRegisterOpen(true)}
            onOpenLogin={() => setIsLoginOpen(true)}
          />
        </nav>
      </div>

      <Modals
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        isRegisterOpen={isRegisterOpen}
        setIsRegisterOpen={setIsRegisterOpen}
      />
    </header>
  );
};

export default HeaderMain;
