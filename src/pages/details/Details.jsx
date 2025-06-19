import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Details.module.css";
import { TbMinus, TbPlus } from "react-icons/tb";

export default function Detials() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <Navbar />
      <div className="container">
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

              <div className={styles.price}>1.56€</div>
              <div className={styles.label}>
                <div>Selecione o peso</div>
                <div className={styles.rowSelect}>
                  <div className={styles.selected}>100g</div>
                  <div>200g</div>
                  <div className={styles.disabled}>500g</div>
                  <div className={styles.disabled}>1kg</div>
                  <div className={styles.disabled}>2.5kg</div>
                </div>
              </div>
              <div className={styles.btns}>
                <div className={styles.quant}>
                  <div
                    className={styles.minus}
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    <TbMinus />
                  </div>
                  <input className={styles.inputQuant} value={quantity} />

                  <div
                    className={styles.plus}
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <TbPlus />
                  </div>
                </div>
                <button className={styles.buy}>Adicionar ao carrinho</button>
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
                elevada qualidade.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
