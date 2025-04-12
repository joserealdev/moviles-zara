import { getProductById } from "@/api/services/mobile";
import ProductOptions from "@/components/Product/ProductOptions";
import ProductSpecifications from "@/components/Product/ProductSpecifications";
import ProductCarousel from "@/components/ProductCarousel";
import ArrowLeft from "@/icons/ArrowLeft";
import Link from "next/link";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ id: string }>;
}

const ProductPage = async ({ params }: Props) => {
  const { id } = await params;
  const { data, error } = await getProductById(id);

  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!data) {
    return <div>No data available</div>;
  }

  return (
    <>
      <Link href="/" className={styles.backLink}>
        <ArrowLeft />
        <span>BACK</span>
      </Link>
      <div className={styles.pageContainer}>
        <div className={styles.columnContainer}>
          <ProductOptions product={data} />
          <ProductSpecifications product={data} />
          <ProductCarousel
            title="Similar Items"
            products={data.similarProducts}
          />
        </div>
      </div>
    </>
  );
};

export default ProductPage;
