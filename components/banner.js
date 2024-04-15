import React from "react";
import styles from "./banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.title}>
        <span className={styles.title1}>Happy</span>
        <span className={styles.title2}>Birthday</span>
      </h1> */}
      {/* <h1 className={styles.title}>
          Happy Birthday!
        </h1> */}
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={props.handleOnClick}>
          {props.buttonText}
        </button>
      </div>
    </div>
  );
};

export default Banner;
