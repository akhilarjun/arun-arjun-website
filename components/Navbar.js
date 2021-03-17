import navStyles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.brand}>
        <div className={navStyles.main_line}>I'm Arun Arjun</div>
        <div className={navStyles.sub_line}>
          A{" "}
          <div className={"highlight"} data-tilt data-cursor-interact="true">
            Digital Branding Consultant
          </div>{" "}
          and Marketing Specialist
        </div>
      </div>
      <div className={navStyles.navlinks}>
        <div className={navStyles.link}>
          <Link href="/">
            <a className={router.pathname === "/" ? navStyles.active : ""}>
              Home
            </a>
          </Link>
        </div>
        <div className={navStyles.link}>
          <Link href="/about">
            <a className={router.pathname === "/about" ? navStyles.active : ""}>
              About Me
            </a>
          </Link>
        </div>
        <div className={navStyles.link}>
          <Link href="/work">
            <a className={router.pathname === "/work" ? navStyles.active : ""}>
              My Work
            </a>
          </Link>
        </div>
        <div className={navStyles.link}>
          <Link href="/say-hi">
            <a
              className={router.pathname === "/say-hi" ? navStyles.active : ""}
            >
              Say Hi!
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
