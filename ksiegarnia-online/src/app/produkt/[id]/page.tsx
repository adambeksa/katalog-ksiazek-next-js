import ProductCardPage from "@/modules/product/presentation/pages/ProductCardPage/ProductCardPage";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  return <ProductCardPage productId={id} />;
}
