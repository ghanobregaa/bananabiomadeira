import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.bannerImg}></div>

          <div className={styles.bannerContent}>
            <div className={styles.title}>
              Banana biológica desidratada da Madeira
            </div>
            <div className={styles.subtitle}>
              Banana biológica desidratada, produzida na costa oeste da ilha da
              Madeira, devidament
            </div>
            <button className={styles.btnPlus}>Ver mais opções</button>
          </div>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.cardImg}>
              <img src="product.png" />
            </div>
            <div className={styles.description}>
              <div>Banana biológica desidratada da Madeira</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
