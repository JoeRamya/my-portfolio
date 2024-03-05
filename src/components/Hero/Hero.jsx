import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ramya</h1>
        <p className={styles.description}>
          A software engineer adept at coding, problem-solving, and
          teamwork, eager to apply academic knowledge to real-world projects and
          contribute to innovative solutions in the tech industry.
        </p>
        <a href="https://drive.google.com/file/d/15a0y8cUAVm9fuT68SKho4z-PcdaGXm8y/view?usp=sharing" target="blank" className={styles.contactBtn}>
          View CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
