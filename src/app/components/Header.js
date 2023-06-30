import React from "react";
import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

function Header() {
  return (
    <header
      // className={styles.main_header}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        // className={styles.navbar_brand}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginRight: "20px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "13vh",
            padding: "0 20px",
          }}
        >
          <Image
            src="/movie-logo.svg"
            height={40}
            alt="logo"
            width={100}
            // style={{ marginTop: "20px" }}
          />
          <h1 style={{ fontSize: "20px", marginBottom: "15px" }}>MovieFlex</h1>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
