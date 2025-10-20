import Link from "next/link";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.headerBox}>
      <p className={style.logo}>Nanny.Services</p>
      <div className={style.linkBox}>
        <Link className={style.link} href="/">
          Home
        </Link>
        <Link className={style.link} href="/nannies">
          Nannies
        </Link>
      </div>
    </div>
  );
};

export default Header;
