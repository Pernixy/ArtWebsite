import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import styles from "./Home.module.css";
import NavBar from "../../components/NavBar";
import starry from "../../images/earth.jpg";
import pfp from "../../images/pfp.jpg";

const Home = () => {
  return (
    <div className={styles.backgroundBody}>
      <Parallax pages={7}>
        <ParallaxLayer offset={0.05}>
          <div>
            <NavBar />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.3}>
          <div className={styles.welcomeContainer}>
            <div className={styles.introTextContainer}>
              <h2 className={styles.welcome}>Hey! I'm Carlos.</h2>
              <p className={styles.pSmall}>
                An enthusiastic software enginner and student currently making
                the most out of the skills I've learned. I've studied Computer
                Science for the past 4 and half years, learning lots of
                programming languages, frameworks, and skills that help me
                develop and create software.
              </p>
            </div>
            <img src={pfp} className={styles.img} alt={starry} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.8}
          factor={1.2}
          speed={0.5}
          style={{
            backgroundImage: `url(${starry})`,
            backgroundSize: "cover",
          }}
        >
          <div className={styles.topParallaxTransition}>
            <h2 className={styles.welcome}>Welcome to my site.</h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2.4}>
          <div className={styles.postIntroContainer}>
            <h1 className={styles.header}>My Technology Stack</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default Home;
