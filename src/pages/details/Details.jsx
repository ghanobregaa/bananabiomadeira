import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Details.module.css";

export default function Detials() {
  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.left}>
            <div className={styles.picture}>
              <div className={styles.mainPicture}>
                <img src="../product.png" />
              </div>
              <div className={styles.miniPictures}>
                <img src="../product.png" />
                <img src="../product.png" />
                <img src="../product.png" />
              </div>
            </div>
          </div>
          <div className={styles.description}>
            <div className={styles.colDesc}>
              <div className={styles.title}>
                Banana biológica desidratada da Madeira
              </div>
              <div className={styles.info}>
                Banana biológica desidratada, produzida na costa oeste da ilha
                da Madeira, devidamente cetificada e cumpridora dos mai elevados
                parâmetros de segurança alimentar.
                <br />
                <br />
                Este produto é rico em potássio. tornando-se um aliado a todas
                as pessoas praticantes de desporto, sendo na sua generalidade
                procurado por pessoas amantes produtos nacionais biológicos de
                elevada qualidade. Marca BBio Tags Desidratadabananabiológica
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
