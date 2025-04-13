"use client";

import { useProductList } from "@/providers/ProductsProvider";
import ProductCard from "../ProductCard";
import styles from "./styles.module.css";

const ProductList = () => {
  const { products } = useProductList();
  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
