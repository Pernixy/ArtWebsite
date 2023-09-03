import React from "react";
import ReactLogo from "../../images/react.png";
import styles from "./InfoItem.module.css";
const InfoItem = (props) => {
  return (
    <div className={styles.itemContainer}>
      <img src={props.imgUrl} className={styles.img} />
      <h3 className={styles.text}>{props.label}</h3>
    </div>
  );
};
export default InfoItem;
