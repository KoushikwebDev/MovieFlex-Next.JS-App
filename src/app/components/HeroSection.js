import React from "react";
import heroStyles from "@/app/styles/herosection.module.css";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

import { Mulish } from "next/font/google";

const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "MovieFlex App",
  description: "Watch your all favorite movies here",
};

function HeroSection({ title, imageUrl }) {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>{title}</h1>
            <p>
              MovieFlex is a new movie website offering a wide selection of
              films across various genres. Users can easily search for movies,
              explore curated lists, and access detailed information about each
              film. The website provides a seamless streaming experience with
              high-quality video playback and audio. Users can create
              personalized watchlists, rate and review movies, and engage with a
              community of movie enthusiasts. MovieFlex is regularly updated
              with the latest releases and aims to be a go-to destination for
              movie lovers seeking an enjoyable and immersive movie-watching
              experience.
            </p>
            <Link href={"/movie"}>
              <button className={mulish.className}>Explore Now</button>
            </Link>
          </div>

          <div className={heroStyles.hero_image}>
            <Image src={imageUrl} alt="logo" width={500} height={500} />
          </div>
        </div>
      </div>

      <div className={styles["custom-shape-divider-bottom-1688104628"]}>
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className={styles["shape-fill"]}
          ></path>
        </svg>
      </div>
    </main>
  );
}

export default HeroSection;
