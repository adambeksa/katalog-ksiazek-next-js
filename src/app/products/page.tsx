import { ProductApiService } from "@/modules/product/infrastructure/api-services/ProductApiService";
import ProductListingPage from "@/modules/product/presentation/pages/ProductListingPage/ProductListingPage";

// ✅ SERVER COMPONENT (domyślnie w Next.js)
// - Fetchuje dane PO STRONIE SERWERA
// - Nie może używać hooks (useState, useEffect)
// - Może być async/await
export default async function ProductsPage() {
  // 1. Pobierz wszystkie produkty na serwerze
  const productService = new ProductApiService();
  const products = await productService.getAll();

  // 2. Serializacja do plain objects (Next.js wymaga tego dla Server->Client props)
  const serializedProducts = JSON.parse(JSON.stringify(products));

  // 3. Przekaż dane jako props do Client Component
  // Filtrowanie i paginacja pozostają po stronie klienta (interaktywność)
  return <ProductListingPage initialProducts={serializedProducts} />;
}
