"use server";

import { Product } from "@/types/product";
import { get } from "@api/httpHelper";

export interface ListProduct {
  id: string;
  brand: string;
  name: string;
  basePrice: number;
  imageUrl: string;
}

interface ListProductFilters {
  search?: string;
  limit?: number;
  offset?: number;
}

export const getListProduct = async (filters?: ListProductFilters) => {
  const queryParams = filters
    ? new URLSearchParams(
        Object.entries(filters)
          .filter(([, value]) => value !== undefined)
          .map(([key, value]) => [key, String(value)])
      )
    : "";

  const response = await get<ListProduct[]>(`/products?${queryParams}`);

  return response;
};

export const getProductById = async (id: string) => {
  const response = await get<Product>(`/products/${id}`);

  return response;
};
