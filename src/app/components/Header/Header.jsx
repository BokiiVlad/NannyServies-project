import Link from "next/link";
import AuthNav from "../AuthNav/AuthNav.jsx";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-[1184px] mx-auto flex justify-between items-center mt-[52px] text-white">
        <p className="text-[30px] font-medium leading-[117%] tracking-[-0.02em]">
          Nanny.Services
        </p>

        <div className="flex gap-23">
          <nav className="flex items-center gap-10">
            <Link href="/">Home</Link>
            <Link href="/nannies">Nannies</Link>
          </nav>
          <AuthNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
