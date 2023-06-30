import React from "react";
import HeroSection from "./components/HeroSection";

function page() {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeroSection title={"Lets wtach movie together"} imageUrl={"/home.svg"} />
    </div>
  );
}

export default page;
