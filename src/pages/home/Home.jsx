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
            <div className={styles.cardImg}></div>
            <div className={styles.cardContent}>
              <div className={styles.rowCard}>
                <div className={styles.columnCard}>
                  <div className={styles.description}>
                    Banana biológica desidratada da Madeira
                  </div>
                  <div className={styles.options}>100g, 200g</div>
                </div>
                <div className={styles.price}>1.56€</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
