"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "../../firebase.js";
import AuthNav from "../AuthNav/AuthNav.jsx";
import Modals from "../Modals/Modals.jsx";

const HeaderMain = ({ isLoginOpen, setIsLoginOpen }) => {
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-[var(--bg-div)]">
      <div className="w-[1184px] mx-auto flex justify-between items-center text-white pt-6 pb-6">
        <p className="text-[30px] font-medium leading-[117%] tracking-[-0.02em]">
          Nanny.Services
        </p>

        <nav className="flex items-center gap-[217px]">
          <div className="flex gap-10 relative">
            <div className="relative">
              <Link
                href="/"
                className={`pb-2 transition-colors ${
                  pathname === "/"
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Home
              </Link>
              {pathname === "/" && (
                <span className="absolute left-1/2 -translate-x-1/2 top-6">
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

            <div className="relative">
              <Link
                href="/nannies"
                className={`pb-2 transition-colors ${
                  pathname === "/nannies"
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                Nannies
              </Link>
              {pathname === "/nannies" && (
                <span className="absolute left-1/2 -translate-x-1/2 top-6">
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

            {user && (
              <div className="relative">
                <Link
                  href="/favorites"
                  className={`pb-2 transition-colors ${
                    pathname === "/favorites"
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  Favorites
                </Link>
                {pathname === "/favorites" && (
                  <span className="absolute left-1/2 -translate-x-1/2 top-6">
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
            )}
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
    </div>
  );
};

export default HeaderMain;
