import React from "react";
import InfoItem from "./InfoItem"; // Make sure to adjust the import path
import styles from "./GridComponent.module.css"; // Import your CSS styles

const GridComponent = (props) => {
  return (
    <div className={styles.gridContainer}>
      {props.data.map((image, index) => (
        <div className={styles.gridItem} key={index}>
          <InfoItem imgUrl={image.url} label={image.label} />
        </div>
      ))}
    </div>
  );
};

export default GridComponent;
