import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import styles from "./About.module.css";
import NavBar from "../../components/NavBar";

const About = () => {
  return (
    <div className={styles.backgroundBody}>
      <Parallax pages={2}>
        <ParallaxLayer>
          <NavBar />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2}>
          <h2 className={styles.textStyle}>About</h2>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default About;
