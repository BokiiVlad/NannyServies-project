"use client";
import Link from "next/link";
import { useState } from "react";
import AuthNav from "../AuthNav/AuthNav.jsx";
import Modals from "../Modals/Modals.jsx";

const Header = ({ variant = "default" }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const isHome = variant === "home";

  return (
    <header
      className={
        isHome
          ? "absolute top-0 left-0 w-full bg-transparent z-50"
          : "bg-[var(--bg-div)]"
      }
    >
      <div
        className={`max-w-[1184px] mx-auto flex justify-between items-center text-white ${
          isHome ? "mt-[52px]" : "p-6"
        }`}
      >
        <p className="text-[30px] font-medium leading-[117%] tracking-[-0.02em]">
          Nanny.Services
        </p>

        <div className="flex gap-23">
          <nav
            className={`flex items-center ${isHome ? "gap-15" : "gap-[217px]"}`}
          >
            <div className="flex gap-10">
              <Link href="/">Home</Link>
              <Link href="/nannies">Nannies</Link>
              {!isHome && <Link href="/favorites">Favorites</Link>}
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
