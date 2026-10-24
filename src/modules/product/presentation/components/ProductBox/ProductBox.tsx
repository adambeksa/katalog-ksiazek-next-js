import Link from "next/link";
import { useTranslations } from "next-intl";
import "./ProductBox.scss";
import { IProduct } from "../../../domain/interfaces/IProduct.interface";
import { ROUTES } from "@/app/routes";
import { memo } from "react";

interface ProductBoxProps {
  product: IProduct;
}

function ProductBox({ product }: ProductBoxProps) {
  const t = useTranslations("products.box");

  if (!product) {
    return null;
  }

  return (
    <div className="product-box">
      <img
        className="product-box__image"
        src={product.image}
        alt={product.name}
      />
      <div className="product-box__info">
        <h3 className="product-box__title">{product.name}</h3>
        <div className="product-box__meta">
          <span className="product-box__author">{product.author}</span>
          <span className="product-box__epoch">{product.epoch}</span>
          <span className="product-box__kind">{product.kind}</span>
          {product.features.includes("audiobook") && (
            <span className="product-box__audio" title="Audiobook">
              Audiobook
            </span>
          )}
        </div>
        <Link
          href={ROUTES.PRODUCT_DETAILS.path(product.id)}
          className="product-box__link"
        >
          {t("viewDetails")}
        </Link>
      </div>
    </div>
  );
}

export default memo(ProductBox);
