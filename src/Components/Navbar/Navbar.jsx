import React from "react";
import styles from "./Navbar.module.css";
import { TbSearch, TbShoppingBag, TbShoppingCart } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className={styles.navbar}>
      <div className={styles.row}>
        <div className={styles.search}>
          <input placeholder="Procurar" />
          <TbSearch size={18} />
        </div>
        <div className={styles.links}>
          <div className={styles.cart} onClick={() => navigate("/cart")}>
            <TbShoppingCart size={20} />
            Carrinho
          </div>
        </div>
      </div>
    </div>
  );
}
