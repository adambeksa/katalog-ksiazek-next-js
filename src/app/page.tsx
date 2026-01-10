import { ProductApiService } from "@/modules/product/infrastructure/api-services/ProductApiService";
import HomePage from "@/modules/product/presentation/pages/HomePage/HomePage";

// ✅ SERVER COMPONENT (domyślnie w Next.js)
// - Fetchuje dane PO STRONIE SERWERA
// - Nie może używać hooks (useState, useEffect)
// - Może być async/await
export default async function Home() {
  // 1. Pobierz dane na serwerze
  const productService = new ProductApiService();
  const allProducts = await productService.getAll();
  
  // 2. Wybierz 3 popularne produkty
  const popularProducts = allProducts.slice(0, 3);

  // 3. Przekaż dane jako props
  return <HomePage popularProducts={popularProducts} />;
}
