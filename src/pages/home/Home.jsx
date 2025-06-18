import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const nagivate = useNavigate();
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
          <div
            className={styles.card}
            onClick={() =>
              nagivate("/details/d1ed4dc9-eed4-4668-ba25-5179aeea8d4e")
            }
          >
            <div className={styles.productImg}>
              <img src="product.png" />
            </div>
            <div className={styles.description}>
              <p>Banana biológica desidratada da Madeira</p>
              <p>100g, 200g</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
