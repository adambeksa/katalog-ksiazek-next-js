import { useTranslations } from "next-intl";

/**
 * Nagłówek kolumn indeksu książek (ukryty na telefonie)
 */
function ProductListingHead() {
  const t = useTranslations("products");

  return (
    <div className="product-listing__head" aria-hidden="true">
      <span>{t("listing.columns.number")}</span>
      <span />
      <span>{t("listing.columns.title")}</span>
      <span>{t("filters.author")}</span>
      <span>{t("filters.epoch")}</span>
      <span>{t("filters.kind")}</span>
      <span>{t("listing.columns.audio")}</span>
    </div>
  );
}

export default ProductListingHead;
