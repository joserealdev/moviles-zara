import React from 'react';
import clsx from 'clsx';
import { ColorOption } from '@/types/product';
import styles from './styles.module.css';

interface IStorageOptionsProps {
  colorOptions: ColorOption[];
  selectedColor: ColorOption | undefined;
  setSelectedColor: (opt: ColorOption) => void;
}

const ColorOptions: React.FC<IStorageOptionsProps> = ({ colorOptions, selectedColor, setSelectedColor }) => {
  return (
    <div className={styles.selectorContainer}>
      <span className={styles.optionTitle}>color. pick your favourite.</span>
      <div className={styles.colorOptionContainer}>
        {colorOptions.map((color) => (
          <button
            key={color.hexCode}
            className={clsx(styles.colorOption, selectedColor?.hexCode === color.hexCode && styles.selectedOption)}
            type="button"
            onClick={() => setSelectedColor(color)}
            style={{ background: color.hexCode }}
            title={color.name}
          />
        ))}
      </div>
      {selectedColor && <span className={styles.selectedColorName}>{selectedColor.name}</span>}
    </div>
  );
};

export default ColorOptions;
