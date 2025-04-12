"use client";

import { getListProduct } from "@/api/services/mobile";
import { ListProduct } from "@/types/product";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface ProductContextType {
  products: ListProduct[];
  loading: boolean;
  setSearchQuery: (query: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

const removeDuplicates = (arr: ListProduct[]) => {
  const uniqueIds = new Set();
  return arr.filter((item) => {
    if (uniqueIds.has(item.id)) {
      return false;
    } else {
      uniqueIds.add(item.id);
      return true;
    }
  });
};

interface ProductProviderProps {
  children: ReactNode;
  initialData?: ListProduct[];
}

export const ProductProvider = ({
  children,
  initialData = [],
}: ProductProviderProps) => {
  const [products, setProducts] = useState<ListProduct[]>(
    removeDuplicates(initialData)
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    const doQuery = async () => {
      const { data } = await getListProduct({ search: searchQuery });
      if (data) setProducts(removeDuplicates(data));
      setLoading(false);
    };

    doQuery();
  }, [searchQuery]);

  const value = {
    products,
    loading,
    setSearchQuery,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export const useProductList = (): ProductContextType => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductProvider");
  }

  return context;
};
