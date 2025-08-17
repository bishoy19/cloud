import HeroPage from "@/components/home/Hero";
import WeperHostion from "@/components/home/WeperHostion";
import React from "react";

const HomePage = () => {
  return (
    <section>
      <HeroPage />
      <h2 className=" text-center mt-10 text-3xl font-bold ">
        choose web hosting paln
      </h2>
      <div className=" container m-auto flex justify-center items-center my-7 flex-wrap md:gap-7 ">
        <WeperHostion />
        <WeperHostion />
        <WeperHostion />
      </div>
    </section>
  );
};

export default HomePage;
