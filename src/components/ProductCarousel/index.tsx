import React from 'react';
import { ListProduct } from '@/types/product';
import ProductCard from '../ProductCard';
import styles from './styles.module.css';

interface IProductCarouselProps {
  title: string;
  products: ListProduct[];
}

const ProductCarousel: React.FC<IProductCarouselProps> = ({ title, products }) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>{title}</span>
      <div className={styles.carousel}>
        {products.map((product, i) => (
          <ProductCard product={product} key={`${product.id}_${i}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
