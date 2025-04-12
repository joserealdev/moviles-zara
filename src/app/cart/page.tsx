"use client";

import CartProductCard from "@/components/cart-product-card";
import { CartContext } from "@/services/CartProvider";
import { CartProduct } from "@/types/cart";
import clsx from "clsx";
import Link from "next/link";
import { useContext } from "react";
import styles from "./page.module.css";

const getTotalFromCart = (cartItem: CartProduct[]) =>
  cartItem.reduce((acc, item) => acc + item.price, 0);

const CartPage = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className={styles.pageContainer}>
      <span className={styles.title}>CART ({cartItems.length})</span>
      <div className={styles.itemList}>
        {cartItems.map((item) => (
          <CartProductCard
            item={item}
            onDelete={() => removeFromCart(item.uuid)}
            key={item.uuid}
          />
        ))}
      </div>
      <div className={styles.fixedContainer}>
        <div className={styles.buttonContainer}>
          <Link
            href="/"
            className={clsx(styles.button, styles.continueShopping)}
            prefetch={false}
          >
            continue shopping
          </Link>
          <div className={styles.leftContainer}>
            <div className={styles.totalContainer}>
              <span>total</span>
              <span>{getTotalFromCart(cartItems)} EUR</span>
            </div>
            <Link
              href="#"
              className={clsx(styles.button, styles.pay)}
              prefetch={false}
            >
              pay
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
