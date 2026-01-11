import Link from "next/link";
import "./ProductBox.scss";
import { IProduct } from "../../../domain/interfaces/IProduct.interface";
import { ROUTES } from "@/app/routes";
import { memo } from "react";

interface ProductBoxProps {
  product: IProduct;
}

/**
 * Komponent prezentacyjny boxu produktu w liście
 * Używany w liście produktów
 */
function ProductBox({ product }: ProductBoxProps) {
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
        <div
          className="product-box__description"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <Link
          href={ROUTES.PRODUCT_DETAILS.path(product.id)}
          className="product-box__link"
        >
          Zobacz szczegóły
        </Link>
      </div>
    </div>
  );
}

export default memo(ProductBox);
