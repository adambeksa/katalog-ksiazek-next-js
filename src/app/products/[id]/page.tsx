import { ProductApiService } from "@/modules/product/infrastructure/api-services/ProductApiService";
import ProductCardPage from "@/modules/product/presentation/pages/ProductCardPage/ProductCardPage";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

// ✅ SERVER COMPONENT
// - Pobiera dane produktu po stronie serwera
// - ID produktu pobierany z URL (params)
export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;

  // 1. Pobierz produkt na serwerze
  const productService = new ProductApiService();
  const product = await productService.getById(id);

  // 2. Jeśli produkt nie istnieje, pokaż 404
  if (!product) {
    notFound();
  }

  // 3. Serializacja do plain object (Next.js wymaga tego dla Server->Client props)
  const serializedProduct = JSON.parse(JSON.stringify(product));

  // 4. Przekaż dane jako props do Client Component
  return <ProductCardPage product={serializedProduct} />;
}
