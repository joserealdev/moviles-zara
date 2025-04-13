"use client";

import Close from "@/icons/Close";
import { useProductList } from "@/providers/ProductsProvider";
import { useDebounce } from "@hooks/useDebounce";
import { useCallback, useEffect, useState } from "react";
import styles from "./styles.module.css";

const SearchBar = () => {
  const { products, setSearchQuery } = useProductList();
  const [search, setSearch] = useState<string>("");

  const debouncedSearchQuery = useDebounce(search, 500);

  useEffect(() => {
    setSearchQuery(debouncedSearchQuery);
  }, [debouncedSearchQuery, setSearchQuery]);

  const onClickClear = useCallback(() => setSearch(""), [setSearch]);

  return (
    <div className={styles.searchContainer}>
      <div className={styles.inputContainer}>
        <input
          value={search}
          type="search"
          placeholder="Search for a smartphone..."
          className={styles.input}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {search.length > 0 && (
          <button
            type="button"
            onClick={onClickClear}
            className={styles.clearButton}
          >
            <Close />
          </button>
        )}
      </div>
      <span className={styles.message}>{products.length} RESULTS</span>
    </div>
  );
};

export default SearchBar;
