import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.navbarItem}>
          <li className={styles.navbarList}>
            <Link href={"/"} className={styles.navbarLink}>
              Home
            </Link>
            <Link href={"/about"} className={styles.navbarLink}>
              About
            </Link>
            <Link href={"/movie"} className={styles.navbarLink}>
              Movie
            </Link>
            <Link href={"/contact "} className={styles.navbarLink}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
