

import ProductBox from "../ProductBox/ProductBox";
import "./PopularProducts.scss";
import { Product } from "@/modules/product/domain/Product";

// ❌ CLIENT COMPONENT (przez "use client")
// - Może używać hooks (useState, useEffect, onClick)
// - Renderuje się w przeglądarce
// - Otrzymuje dane jako props (nie fetchuje sam)
interface PopularProductsProps {
  products: Product[];
}

function PopularProducts({ products }: PopularProductsProps) {
  return (
    <section className="popular-products">
      <h2 className="popular-products__title">Popularne lektury</h2>
      <div className="popular-products__grid">
        {products.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
