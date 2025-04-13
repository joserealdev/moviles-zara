import { getListProduct, getProductById } from "@/api/services/mobile";
import ProductOptions from "@/components/Product/ProductOptions";
import ProductSpecifications from "@/components/Product/ProductSpecifications";
import ProductCarousel from "@/components/ProductCarousel";
import ArrowLeft from "@/icons/ArrowLeft";
import { removeDuplicates } from "@/utils/list-product";
import { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const { id } = params;
  const { data, error } = await getProductById(id);

  if (error || !data) {
    return {
      title: "Product not found",
      description: "Product not found",
    };
  }

  return {
    title: `${data.name} - Mobile Store`,
    description: `This is the product page for ${data.name}`,
  };
}

export async function generateStaticParams() {
  const { data, error } = await getListProduct();

  if (error || !data) return [];

  return removeDuplicates(data).map(({ id }) => ({ id }));
}

export const revalidate = 86400; // 24 hours

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
