import { ProductProvider } from "@/modules/product/application/context/ProductContext";
import ProductListingPage from "@/modules/product/presentation/pages/ProductListingPage/ProductListingPage";

export default function ProductsPage() {
  return (
    <ProductProvider>
      <ProductListingPage />
    </ProductProvider>
  );
}
