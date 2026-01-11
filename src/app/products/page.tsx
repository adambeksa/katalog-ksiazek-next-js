import { productFacade } from "@/modules/product/application/ProductFacade";
import ProductListingPage from "@/modules/product/presentation/pages/ProductListingPage/ProductListingPage";

export default async function ProductsPage() {
  const products = await productFacade.getAllProducts();

  const serializedProducts = JSON.parse(JSON.stringify(products));

  return <ProductListingPage initialProducts={serializedProducts} />;
}
