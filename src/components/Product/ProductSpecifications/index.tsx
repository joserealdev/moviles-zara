import React from 'react';
import clsx from 'clsx';
import { Product } from '@/types/product';
import styles from './styles.module.css';

type SpecificationDisplay = {
  name: string;
  data: string;
};

interface IProductSpecificationsProps {
  product: Product;
}

const ProductSpecifications: React.FC<IProductSpecificationsProps> = ({ product }) => {
  const specificationArray: SpecificationDisplay[] = [
    { name: 'brand', data: product.brand },
    { name: 'name', data: product.name },
    { name: 'description', data: product.description },
    { name: 'screen', data: product.specs.screen },
    { name: 'resolution', data: product.specs.resolution },
    { name: 'processor', data: product.specs.processor },
    { name: 'main camera', data: product.specs.mainCamera },
    { name: 'selfie camera', data: product.specs.selfieCamera },
    { name: 'battery', data: product.specs.battery },
    { name: 'os', data: product.specs.os },
    { name: 'screen refresh rate', data: product.specs.screenRefreshRate },
  ];

  return (
    <div className={styles.container}>
      <span className={styles.title}>SPECIFICATIONS</span>
      <table className={styles.table}>
        <tbody>
          {specificationArray.map((spec) => (
            <tr key={spec.name} className={styles.row}>
              <td className={clsx(styles.cell, styles.specName)}>{spec.name}</td>
              <td className={styles.cell}>{spec.data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSpecifications;
