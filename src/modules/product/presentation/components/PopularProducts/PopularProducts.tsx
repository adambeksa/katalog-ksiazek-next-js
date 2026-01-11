import { useTranslations } from "next-intl";
import ProductBox from "../ProductBox/ProductBox";
import "./PopularProducts.scss";
import { Product } from "@/modules/product/domain/Product";

interface PopularProductsProps {
  products: Product[];
}

function PopularProducts({ products }: PopularProductsProps) {
  const t = useTranslations("products.popular");

  return (
    <section className="popular-products">
      <h2 className="popular-products__title">{t("title")}</h2>
      <div className="popular-products__grid">
        {products.map((product) => (
          <ProductBox key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default PopularProducts;
