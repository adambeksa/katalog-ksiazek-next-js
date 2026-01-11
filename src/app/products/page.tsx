import { ProductApiService } from "@/modules/product/infrastructure/api-services/ProductApiService";
import ProductListingPage from "@/modules/product/presentation/pages/ProductListingPage/ProductListingPage";

export default async function ProductsPage() {
  const productService = new ProductApiService();
  const products = await productService.getAll();

  const serializedProducts = JSON.parse(JSON.stringify(products));

  return <ProductListingPage initialProducts={serializedProducts} />;
}
