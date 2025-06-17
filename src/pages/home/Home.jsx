import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.banner}></div>
      </div>
    </div>
  );
}
