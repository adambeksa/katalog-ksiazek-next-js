import { productFacade } from "@/modules/product/application/ProductFacade";
import ProductCardPage from "@/modules/product/presentation/pages/ProductCardPage/ProductCardPage";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const product = await productFacade.getProductById(id);

  if (!product) {
    notFound();
  }

  const serializedProduct = JSON.parse(JSON.stringify(product));

  return <ProductCardPage product={serializedProduct} />;
}
