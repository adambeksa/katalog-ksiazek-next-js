import Link from "next/link";
import { useTranslations } from "next-intl";
import { ROUTES } from "@/app/routes";
import "./ProductCardPage.scss";

function ProductCardError() {
  const t = useTranslations("productCard");

  return (
    <div className="product-card-page">
      <div className="container">
        <div className="product-card-page__not-found">
          <h2>{t("notFound")}</h2>
          <Link href={ROUTES.PRODUCTS.path} className="product-card-page__back-button">
            {t("backToList")}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCardError;
