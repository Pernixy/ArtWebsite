import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import styles from "./Home.module.css";
import NavBar from "../../components/Home/NavBar";

const Home = () => {
  return (
    <div className={styles.backgroundBody}>
      <Parallax pages={2}>
        <ParallaxLayer>
          <NavBar />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2}>
          <h2 className={styles.textStyle}>Hello</h2>
        </ParallaxLayer>
        <ParallaxLayer offset={1}>
          <h2 className={styles.textStyle}>Welcome to the site</h2>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id
            aliquam purus, eget dignissim lacus. Mauris mollis pellentesque
            metus et condimentum. Mauris malesuada arcu sed diam consectetur, at
            sodales orci tincidunt. Donec arcu leo, lacinia vitae iaculis eget,
            placerat eu erat. Ut gravida orci urna, sed mollis arcu facilisis
            ut. Sed a auctor nibh, at viverra ipsum. Suspendisse id vulputate
            neque. Suspendisse sollicitudin sapien sapien, sit amet tincidunt
            nisl maximus lobortis. Duis molestie turpis nulla, commodo dapibus
            neque vestibulum nec. Fusce condimentum pulvinar ipsum vitae
            molestie. In venenatis enim ac eleifend accumsan. Etiam mollis
            aliquam tincidunt. Pellentesque id nulla leo. Integer quis enim et
            arcu ullamcorper varius vel sit amet eros. Duis imperdiet dui sit
            amet pellentesque suscipit. Sed commodo porta dolor ut convallis.
            Donec sit amet diam mollis, viverra magna nec, efficitur nunc.
            Mauris vel dui convallis, porta velit quis, mollis elit. Phasellus
            condimentum pellentesque ultrices. Curabitur convallis euismod
            vulputate. Vestibulum tristique ligula eget porta placerat. Aliquam
            quis ornare sem. Donec vitae dolor erat. Aliquam eu molestie elit.
            Donec ultrices nibh arcu, ut interdum felis dignissim id. Duis nibh
            purus, commodo vestibulum quam a, rutrum egestas ipsum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Etiam sagittis
            facilisis arcu et ultricies. Curabitur non purus quis est volutpat
            porta. Nulla facilisi. Cras euismod tristique orci, vel vulputate
            ipsum sollicitudin id. Mauris consequat ipsum at malesuada
            elementum. Nam eget vestibulum velit, non ultricies felis. Nullam
            pellentesque imperdiet ipsum non mattis. Nullam et enim eu ipsum
            accumsan egestas. Nulla rutrum pretium lorem id commodo. Praesent ac
            tellus congue, condimentum magna vel, lobortis diam. Vivamus eu
            velit est. Aliquam erat volutpat. Maecenas sem nunc, sodales ac
            dignissim quis, porttitor nec ligula. Nulla facilisi. Sed eget sem
            sed justo ultrices luctus. Mauris condimentum sem urna, eu porta
            eros eleifend ut. Interdum et malesuada fames ac ante ipsum primis
            in faucibus. Mauris eleifend nunc a lorem iaculis, id rhoncus elit
            aliquam. Nullam sit amet volutpat mi. Sed et vulputate tellus. Cras
            pharetra sapien sed nibh porta consectetur. Curabitur est metus,
            pharetra non turpis sit amet, feugiat posuere lectus. In hac
            habitasse platea dictumst. Nullam commodo eu lectus gravida
            ullamcorper. Nunc eget nisl at sapien vulputate efficitur. In hac
            habitasse platea dictumst. Fusce quis feugiat diam. Duis dolor
            purus, mattis et maximus a, semper at nisi. Duis a elementum lacus.
            Maecenas gravida libero tellus. Fusce ac lorem felis. Quisque a
            pretium urna.
          </p>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};
export default Home;