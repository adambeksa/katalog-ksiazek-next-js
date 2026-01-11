import { ProductApiService } from "@/modules/product/infrastructure/api-services/ProductApiService";
import HomePage from "@/modules/product/presentation/pages/HomePage/HomePage";

export default async function Home() {
  const productService = new ProductApiService();
  const allProducts = await productService.getAll();
  
  const popularProducts = allProducts.slice(0, 3);

  return <HomePage popularProducts={popularProducts} />;
}
