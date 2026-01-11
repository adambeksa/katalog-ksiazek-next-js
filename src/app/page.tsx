import { productFacade } from "@/modules/product/application/ProductFacade";
import HomePage from "@/modules/product/presentation/pages/HomePage/HomePage";

export default async function Home() {
  const allProducts = await productFacade.getAllProducts();
  
  const popularProducts = allProducts.slice(0, 3);

  return <HomePage popularProducts={popularProducts} />;
}
