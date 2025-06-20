import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Cart.module.css";
import {
  TbMinus,
  TbPlus,
  TbShoppingBag,
  TbShoppingCart,
  TbTrash,
} from "react-icons/tb";

export default function Cart() {
  const Item = () => {
    return (
      <div className={styles.item}>
        <div className={styles.row}>
          <div className={styles.itemImg}>
            <img src="product.png" />
          </div>
          <div className={styles.columnProductInfo}>
            <div className={styles.titleProduct}>
              Banana biológica desidratada da Madeira
            </div>
            <div className={styles.rowBadges}>
              <div className={styles.badge}>Peso: 100g</div>
            </div>
          </div>
          <div className={styles.trash}>
            <TbTrash />
          </div>
        </div>
        <div className={styles.rows}>
          <div className={styles.quant}>
            <div className={styles.quantBtn}>
              <TbMinus />
            </div>
            <div className={styles.quantTotal}>2</div>
            <div className={styles.quantBtn}>
              <TbPlus />
            </div>
          </div>
          <div className={styles.columnActions}>
            <div className={styles.columnPrices}>
              <div>3.12€</div>
              <div>1.56€ cada</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={styles.separate}>
          <div className={styles.box}>
            <div className={styles.title}>
              <TbShoppingCart />
              Carrinho de compras ( 1 item )
            </div>
            <div className={styles.column}>
              <Item />
            </div>
          </div>
          <div
            className={`${styles.box} ${styles.sticky}`}
            style={{ gap: ".75em" }}
          >
            <div className={styles.title}>Resumo</div>
            <div className={styles.rowBetween}>
              <div>Subtotal</div>
              <div>3.12€</div>
            </div>
            <div className={styles.rowBetween}>
              <div>Portes de envio</div>
              <div className={styles.free}>Grátis</div>
            </div>
            <div className={styles.rowBetween}>
              <div>IVA</div>
              <div>0.00€</div>
            </div>
            <div className={styles.totalInfo}>
              <div className={styles.rowBetweenTotal}>
                <div>Total</div>
                <div>3.12€</div>
              </div>
              <div className={styles.checkoutBtns}>
                <button className={styles.btnBuy}>Comprar agora</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
