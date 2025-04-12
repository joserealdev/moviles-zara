import React from 'react';
import clsx from 'clsx';
import { StorageOption } from '@/types/product';
import styles from './styles.module.css';

interface IStorageOptionsProps {
  storageOptions: StorageOption[];
  selectedStorage: StorageOption | undefined;
  setSelectedStorage: (opt: StorageOption) => void;
}

const StorageOptions: React.FC<IStorageOptionsProps> = ({ storageOptions, selectedStorage, setSelectedStorage }) => {
  return (
    <div className={styles.selectorContainer}>
      <span className={styles.optionTitle}>Storage ¿hOW MUCH SPACE DO YOU NEED?</span>
      <div className={styles.storageOptionContainer}>
        {storageOptions.map((storage) => (
          <button
            key={storage.capacity}
            className={clsx(
              styles.storageOption,
              selectedStorage?.capacity === storage.capacity && styles.selectedOption
            )}
            type="button"
            onClick={() => setSelectedStorage(storage)}
          >
            {storage.capacity}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StorageOptions;
