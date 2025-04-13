"use client";

import { CartContext } from "@/providers/CartProvider";
import { CartProduct } from "@/types/cart";
import { ColorOption, Product, StorageOption } from "@/types/product";
import Image from "next/image";
import React, {
  useCallback,
  useContext,
  useMemo,
  useState,
  unstable_ViewTransition as ViewTransition,
} from "react";
import ColorOptions from "./ColorOptions";
import StorageOptions from "./StorageOptions";
import styles from "./styles.module.css";

interface IProductOptionsProps {
  product: Product;
}

const ProductOptions: React.FC<IProductOptionsProps> = ({ product }) => {
  const { colorOptions, storageOptions, basePrice, name } = product;
  const { addToCart } = useContext(CartContext);
  const [selectedColor, setSelectedColor] = useState<ColorOption>();
  const [selectedStorage, setSelectedStorage] = useState<StorageOption>();

  const displayedImage = useMemo(
    () => selectedColor?.imageUrl ?? colorOptions[0].imageUrl,
    [colorOptions, selectedColor?.imageUrl]
  );

  const displayedPrice = useMemo(
    () => selectedStorage?.price ?? `From ${basePrice}`,
    [basePrice, selectedStorage?.price]
  );

  const doAddToCart = useCallback(() => {
    if (!selectedColor || !selectedStorage) return;
    const uuid = crypto.randomUUID();
    const cartItem: CartProduct = {
      uuid,
      name,
      storage: selectedStorage.capacity,
      price: selectedStorage.price,
      color: selectedColor.name,
      imageUrl: selectedColor.imageUrl,
    };

    addToCart(cartItem);
  }, [addToCart, name, selectedColor, selectedStorage]);

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <ViewTransition name={`phone-${product.id}`}>
          <Image
            src={displayedImage}
            fill
            alt={name}
            className={styles.image}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </ViewTransition>
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.nameContainer}>
          <span className={styles.name}>
            <ViewTransition name={`phone-${product.id}-name`}>
              {name}
            </ViewTransition>
          </span>
          <span className={styles.price}>{displayedPrice} EUR</span>
        </div>
        <div className={styles.optionsSelectorContainer}>
          <StorageOptions
            storageOptions={storageOptions}
            selectedStorage={selectedStorage}
            setSelectedStorage={setSelectedStorage}
          />
          <ColorOptions
            colorOptions={colorOptions}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
          />
        </div>
        <button
          type="button"
          className={styles.addToCart}
          disabled={!selectedColor || !selectedStorage}
          onClick={doAddToCart}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductOptions;
