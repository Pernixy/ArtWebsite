import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import styles from "./Home.module.css";
import NavBar from "../../components/NavBar";
import starry from "../../images/earth.jpg";
import pfp from "../../images/pfp.jpg";
import instagramLogo from "../../images/instagram.png";
import githubLogo from "../../images/github.png";
import linkedinLogo from "../../images/linkedin.png";
import GridComponent from "../../components/Home/GridComponent";
import { stackImages } from "../../images/imageVariables";

const Home = () => {
  return (
    <div className={styles.backgroundBody}>
      <Parallax pages={4}>
        <ParallaxLayer offset={0.05}>
          <div>
            <NavBar />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.2}>
          <div className={styles.welcomeContainer}>
            <div className={styles.introTextContainer}>
              <div className={styles.nameHeader}>
                <h2 className={styles.welcome}>Hey! I'm Carlos.</h2>
                <div className={styles.socialsContainer}>
                  <img src={instagramLogo} className={styles.socialimg} />
                  <img src={githubLogo} className={styles.socialimg} />
                  <img src={linkedinLogo} className={styles.socialimg} />
                </div>
              </div>
              <p className={styles.pSmall}>
                An enthusiastic software enginner and student currently making
                the most out of the skills I've learned. I've studied Computer
                Science for the past four years, learning lots of programming
                languages, frameworks, and skills that have helped me develop
                and create software.
              </p>
            </div>
            <img src={pfp} className={styles.img} alt={starry} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.5}
          factor={1.4}
          speed={0.5}
          style={{
            backgroundImage: `url(${starry})`,
            backgroundSize: "cover",
          }}
        >
          <div className={styles.topParallaxTransition} />
          <div className={styles.siteIntroContainer}>
            <h2 className={styles.welcome2}>Welcome to My Site</h2>
            <p className={styles.pWelcome}>
              Welcome to my professional website! As a dedicated software
              engineer and computer science major, I've embarked on a remarkable
              journey in the world of technology. This website serves as a
              digital canvas to showcase my passion for coding, my professional
              experiences, and the milestones that have shaped my career. Beyond
              the lines of code and algorithms, you'll also get a glimpse into
              my personal interests and hobbies that make me who I am. Join me
              on this digital voyage as we explore the convergence of my
              professional pursuits and personal passions, all in one place.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={6}
          style={{ background: "linear-gradient(#000000, #dcfefc 60%)" }}
        >
          <div className={styles.postIntroContainer}>
            <h1 className={styles.stackHeader}>My Technology Stack</h1>
            <GridComponent data={stackImages} />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default Home;
