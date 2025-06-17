import React from "react";
import styles from "./Navbar.module.css";
import { TbSearch, TbShoppingBag, TbShoppingCart } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.row}>
        <div className={styles.search}>
          <input placeholder="Procurar" />
          <TbSearch size={18} />
        </div>
        <div className={styles.links}>
          <div className={styles.link}>
            <TbShoppingCart size={18} />
            Carrinho
          </div>
        </div>
      </div>
    </div>
  );
}
