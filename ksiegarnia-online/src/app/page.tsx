import { ProductProvider } from "@/modules/product/application/context/ProductContext";
import HomePage from "@/modules/product/presentation/pages/HomePage/HomePage";

export default function Home() {
  return (
    <ProductProvider>
      <HomePage />
    </ProductProvider>
  );
}
