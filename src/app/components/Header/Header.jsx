"use client";

import Link from "next/link";
import AuthNav from "../AuthNav/AuthNav.jsx";
import React, { useState } from "react";
import Modals from "../Modals/Modals.jsx";

const Header = () => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-[1184px] mx-auto flex justify-between items-center mt-[52px] text-white">
        <p className="text-[30px] font-medium leading-[117%] tracking-[-0.02em]">
          Nanny.Services
        </p>

        <div className="flex gap-23">
          <nav className="flex items-center gap-15">
            <div className="flex gap-10">
              <Link href="/">Home</Link>
              <Link href="/nannies">Nannies</Link>
            </div>
            <AuthNav
              onOpenRegister={() => setIsRegisterOpen(true)}
              onOpenLogin={() => setIsLoginOpen(true)}
            />
          </nav>
        </div>
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

export default Header;
