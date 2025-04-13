import { ProductProvider } from "@/providers/ProductsProvider";
import { getListProduct } from "@api/services/mobile";
import ProductList from "@components/ProductList";
import SearchBar from "@components/SearchBar";
import styles from "./page.module.css";

export default async function Home() {
  const { data, error } = await getListProduct();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <ProductProvider initialData={data}>
      <div className={styles.contentContainer}>
        <SearchBar />
        <ProductList />
      </div>
    </ProductProvider>
  );
}
