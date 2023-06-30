import React from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard";
import styles from "@/app/styles/common.module.css";

async function page() {
  const options = {
    method: "GET",
    url: "https://netflix54.p.rapidapi.com/search/",
    params: {
      query: "stranger",
      offset: "0",
      limit_titles: "50",
      limit_suggestions: "20",
      lang: "en",
    },
    headers: {
      "X-RapidAPI-Key": "f005d1e004msh36c2669a64afeb3p19bd23jsn57fe613d0247",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };
  console.log(options);

  const response = await axios.request(options);
  const mainData = response.data.titles;
  console.log(mainData);
  // console.log(response.data);

  return (
    <section className={styles.movieSection}>
      <h1>Series & Movies</h1>
      <div
        className={styles.container}
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {mainData.map((items, index) => {
          return <MovieCard key={index} {...items} />;
        })}
      </div>
    </section>
  );
}

export default page;
