import { ListProduct } from "@/types/product";

export const removeDuplicates = (arr: ListProduct[]) => {
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
