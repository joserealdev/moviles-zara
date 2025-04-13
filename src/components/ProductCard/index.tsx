import { ListProduct } from "@/api/services/mobile";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { unstable_ViewTransition as ViewTransition } from "react";
import styles from "./styles.module.css";

interface Props {
  product: ListProduct;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Link href={`/product/${product.id}`} prefetch={false}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <ViewTransition name={`phone-${product.id}`}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              className={styles.image}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
              loading="lazy"
              fill
            />
          </ViewTransition>
        </div>
        <div className={styles.data}>
          <div className={styles.phoneName}>
            <span className={styles.brand}>{product.brand}</span>
            <span className={styles.text12}>
              <ViewTransition name={`phone-${product.id}-name`}>
                {product.name}
              </ViewTransition>
            </span>
          </div>
          <div className={clsx(styles.price, styles.text12)}>
            {product.basePrice} EUR
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
