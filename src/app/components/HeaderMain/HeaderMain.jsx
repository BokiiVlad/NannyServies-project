"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import AuthNav from "../AuthNav/AuthNav.jsx";
import Modals from "../Modals/Modals.jsx";

const HeaderMain = ({ isLoginOpen, setIsLoginOpen }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/nannies", label: "Nannies" },
    { href: "/favorites", label: "Favorites" },
  ];

  return (
    <header className="bg-[var(--bg-div)]">
      <div className="w-[1184px] mx-auto flex justify-between items-center text-white pt-6 pb-6">
        <p className="text-[30px] font-medium leading-[117%] tracking-[-0.02em]">
          Nanny.Services
        </p>

        <nav className="flex items-center gap-[217px]">
          <div className="flex gap-10 relative">
            {links.map(({ href, label }) => (
              <div key={href} className="relative">
                <Link
                  href={href}
                  className={`pb-2 transition-colors ${
                    pathname === href
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {label}
                </Link>

                {pathname === href && (
                  <span className="absolute left-1/2 -translate-x-1/2 top-6 ">
                    <svg
                      width="8"
                      height="8"
                      viewBox="0 0 8 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="4" cy="4" r="4" fill="white" />
                    </svg>
                  </span>
                )}
              </div>
            ))}
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
