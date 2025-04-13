import { CartProduct } from "@/types/cart";
import Image from "next/image";
import styles from "./styles.module.css";

interface Props {
  item: CartProduct;
  onDelete: () => void;
}

const CartProductCard = ({ item, onDelete }: Props) => (
  <div className={styles.card}>
    <div className={styles.imageContainer}>
      <Image
        fill
        src={item.imageUrl}
        priority
        sizes="(max-width: 1200px) 50vw, 25vw"
        alt={item.name}
        className={styles.image}
      />
    </div>
    <div className={styles.dataContainer}>
      <div className={styles.textContainer}>
        <span>{item.name}</span>
        <span>
          {item.storage} | {item.color}
        </span>
        <span>{item.price} EUR</span>
      </div>
      <button className={styles.delete} onClick={onDelete}>
        Delete
      </button>
    </div>
  </div>
);

export default CartProductCard;
