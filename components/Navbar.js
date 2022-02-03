import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <img src="/vercel.svg" />
      <div>
        <Link href="/">
          <a className={router.pathname === "/" ? styles.active : ""}>Home</a>
        </Link>
        <Link href="/about">
          <a className={router.pathname === "/about" ? styles.active : ""}>
            About
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
