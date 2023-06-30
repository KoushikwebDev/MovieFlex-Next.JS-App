import React from "react";
import axios from "axios";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";

async function page({ params }) {
  const id = params.id;
  const options = {
    method: "GET",
    url: `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`,

    headers: {
      "X-RapidAPI-Key": "f005d1e004msh36c2669a64afeb3p19bd23jsn57fe613d0247",
      "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
    },
  };

  const response = await axios.request(options);
  const main_data = response.data[0].details;
  // console.log(mainData);
  // console.log(response.data);

  return (
    <div className={styles.container}>
      <h2 className={styles.movie_title}>
        Netflix \ <span> {main_data.type} </span>{" "}
      </h2>
      <div className={styles.card_section}>
        <div>
          <Image
            src={main_data.backgroundImage.url}
            alt={main_data.title}
            width={600}
            height={300}
          />
        </div>
        <div>
          <h1>{main_data.title}</h1>
          <p>{main_data.synopsis}</p>
        </div>
      </div>
    </div>
  );
}

export default page;
