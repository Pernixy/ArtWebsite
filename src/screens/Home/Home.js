import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import styles from "./Home.module.css";
import NavBar from "../../components/NavBar";
import starry from "../../images/earth.jpg";
import pfp from "../../images/pfp.jpg";
import reactLogo from "../../images/react.png";
import instagramLogo from "../../images/instagram.png";
import githubLogo from "../../images/github.png";
import linkedinLogo from "../../images/linkedin.png";
import InfoItem from "../../components/Home/InfoItem";

const Home = () => {
  return (
    <div className={styles.backgroundBody}>
      <Parallax pages={7}>
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
                Science for the past 4 and half years, learning lots of
                programming languages, frameworks, and skills that have helped
                me develop and create software.
              </p>
            </div>
            <img src={pfp} className={styles.img} alt={starry} />
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.3}
          factor={1.2}
          speed={0.5}
          style={{
            backgroundImage: `url(${starry})`,
            backgroundSize: "cover",
          }}
        >
          <div className={styles.topParallaxTransition} />
          <div className={styles.siteIntroContainer}>
            <h2 className={styles.welcome2}>Welcome to My Site</h2>
            <p className={styles.pSmall}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus
              mauris vitae ultricies leo integer. Odio facilisis mauris sit amet
              massa vitae tortor condimentum. Phasellus faucibus scelerisque
              eleifend donec pretium vulputate. Ut faucibus pulvinar elementum
              integer enim neque volutpat. Adipiscing enim eu turpis egestas
              pretium. Placerat vestibulum lectus mauris ultrices eros in
              cursus. Vitae et leo duis ut diam quam nulla porttitor. Pretium
              viverra suspendisse potenti nullam ac tortor vitae purus faucibus.
              Blandit turpis cursus in hac habitasse platea dictumst quisque.
              Purus in massa tempor nec feugiat. Nunc non blandit massa enim.
              Sed nisi lacus sed viverra tellus in. Risus viverra adipiscing at
              in. Venenatis urna cursus eget nunc scelerisque. Ac ut consequat
              semper viverra nam. Placerat duis ultricies lacus sed turpis
              tincidunt id aliquet. Urna porttitor rhoncus dolor purus non enim
              praesent elementum. Lectus magna fringilla urna porttitor rhoncus
              dolor purus non enim. Nisl tincidunt eget nullam non nisi est.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{ background: "linear-gradient(#000000, #0e0e1d)" }}
        >
          <div className={styles.postIntroContainer}>
            <h1 className={styles.header}>My Technology Stack</h1>
            <InfoItem imgUrl={reactLogo} />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default Home;
