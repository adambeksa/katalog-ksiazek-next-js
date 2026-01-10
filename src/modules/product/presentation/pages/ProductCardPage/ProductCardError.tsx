import Link from "next/link";
import { ROUTES } from "@/app/routes";
import "./ProductCardPage.scss";

interface ProductCardErrorProps {
  message?: string;
}

function ProductCardError({ message }: ProductCardErrorProps) {
  return (
    <div className="product-card-page">
      <div className="container">
        <div className="product-card-page__not-found">
          <h2>{message || "Książka nie została znaleziona"}</h2>
          <Link href={ROUTES.PRODUCTS.path} className="product-card-page__back-button">
            Powrót do listy książek
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCardError;
