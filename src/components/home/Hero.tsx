import Image from "next/image";
import React from "react";
import { TiTick } from "react-icons/ti";
import goodIage from "../../../public/cloud-hosting.png";
import sheetCss from "./hero.module.css";

const HeroPage = () => {
  return (
    <div className={sheetCss.hero}>
      <div className={sheetCss.heroLeft}>
        <h1 className={sheetCss.title}>cloud hosting</h1>
        <p className={sheetCss.desc}>
          the best wep hostiog solutaion for yout onlain courses{" "}
        </p>
        <div className={sheetCss.services}>
          <div className={sheetCss.serviceItem}>
            <TiTick />
            esey to use controle panel
          </div>
          <div className={sheetCss.serviceItem}>
            <TiTick />
            secure hosting
          </div>
          <div className={sheetCss.serviceItem}>
            <TiTick />
            website builder
          </div>
        </div>
      </div>
      <div>
        <Image src={goodIage}
          alt="hero"
          width={500}
          height={500}
          priority={true} />
      </div>

    </div>
  );
};

export default HeroPage;
