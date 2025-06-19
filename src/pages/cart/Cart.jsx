import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Cart.module.css";
import { TbShoppingBag } from "react-icons/tb";

export default function Cart() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className={styles.separate}>
          <div className={styles.box}>
            <div className={styles.title}>
              <TbShoppingBag />
              Carrinho de compras
            </div>
            <div className={styles.column}>
              <div className={styles.item}>
                <div className={styles.itemImg}>
                  <img src="product.png" />
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemImg}>
                  <img src="product.png" />
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemImg}>
                  <img src="product.png" />
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemImg}>
                  <img src="product.png" />
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.itemImg}>
                  <img src="product.png" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.box}>
            <div className={styles.title}>Resumo</div>
          </div>
        </div>
      </div>
    </div>
  );
}
