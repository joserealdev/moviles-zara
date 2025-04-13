"use client";

import Bag from "@/icons/Bag";
import { CartContext } from "@/providers/CartProvider";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./styles.module.css";

const CartLink: React.FC = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <Link href="/cart" className={styles.cartLink} prefetch={false}>
      <Bag />
      <span>{cartItems.length}</span>
    </Link>
  );
};

export default CartLink;
