import Skeleton from "../../../../shared/ui/components/Skeleton/Skeleton";
import "./ProductCardPage.scss";
import Breadcrumbs from "../../../../shared/ui/components/Breadcrumbs/Breadcrumbs";
import router from "next/dist/client/router";

function ProductCardSkeleton() {
  return (
    <div className="product-card-page">
      <div className="container">
        <Breadcrumbs />
        <button
          className="product-card-page__back-link"
        >
          ← Powrót
        </button>

        <div className="product-card-page__details">
          <div className="product-card-page__image-section">
            <Skeleton height="400px" width="100%" borderRadius="8px" />
          </div>

          <div className="product-card-page__info-section">
            <Skeleton
              height="24px"
              width="150px"
              className="product-card-page__skeleton-mb-2"
            />
            <Skeleton
              height="48px"
              width="300px"
              className="product-card-page__skeleton-mb-4"
            />

            <div className="product-card-page__description-section">
              <Skeleton
                height="28px"
                width="120px"
                className="product-card-page__skeleton-mb-2"
              />
              <Skeleton
                height="16px"
                width="100%"
                className="product-card-page__skeleton-mb-1"
              />
              <Skeleton
                height="16px"
                width="100%"
                className="product-card-page__skeleton-mb-1"
              />
              <Skeleton
                height="16px"
                width="90%"
                className="product-card-page__skeleton-mb-1"
              />
              <Skeleton
                height="16px"
                width="95%"
                className="product-card-page__skeleton-mb-1"
              />
              <Skeleton
                height="16px"
                width="60%"
                className="product-card-page__skeleton-mb-1"
              />
            </div>

            <div className="product-card-page__skeleton-mt-4">
              <Skeleton height="100px" width="100%" borderRadius="8px" />
            </div>

            <div className="product-card-page__actions product-card-page__skeleton-mt-4">
              <Skeleton
                height="48px"
                width="180px"
                borderRadius="24px"
                className="product-card-page__skeleton-mr-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCardSkeleton;
