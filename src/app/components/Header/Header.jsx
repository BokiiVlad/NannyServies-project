"use client";
import Link from "next/link";
import { useState } from "react";
import AuthNav from "../AuthNav/AuthNav.jsx";
import Modals from "../Modals/Modals.jsx";

const HomeHeader = ({ isLoginOpen, setIsLoginOpen }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="w-[1184px] mx-auto flex justify-between items-center text-white mt-[52px] ">
        <p className="text-[30px] font-medium leading-[117%] tracking-[-0.02em]">
          Nanny.Services
        </p>

        <nav className="flex items-center gap-[92px]">
          <div className="flex gap-10">
            <Link href="/">Home</Link>
            <Link href="/nannies">Nannies</Link>
          </div>
          <div className="flex justify-between items-center gap-3">
            <AuthNav
              onOpenRegister={() => setIsRegisterOpen(true)}
              onOpenLogin={() => setIsLoginOpen(true)}
            />
          </div>
        </nav>
      </div>

      <Modals
        isLoginOpen={isLoginOpen}
        setIsLoginOpen={setIsLoginOpen}
        isRegisterOpen={isRegisterOpen}
        setIsRegisterOpen={setIsRegisterOpen}
      />
    </div>
  );
};

export default HomeHeader;
