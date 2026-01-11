import { ProductApiService } from "@/modules/product/infrastructure/api-services/ProductApiService";
import ProductCardPage from "@/modules/product/presentation/pages/ProductCardPage/ProductCardPage";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  const productService = new ProductApiService();
  const product = await productService.getById(id);

  if (!product) {
    notFound();
  }

  const serializedProduct = JSON.parse(JSON.stringify(product));

  return <ProductCardPage product={serializedProduct} />;
}
