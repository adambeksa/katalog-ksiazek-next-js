import Breadcrumbs from "../../../../shared/ui/components/Breadcrumbs/Breadcrumbs";
import ProductBoxSkeleton from "../../components/ProductBox/ProductBoxSkeleton";
import ProductFiltersSkeleton from "../../components/ProductFilters/ProductFiltersSkeleton";
import "./ProductListingPage.scss";

function ProductListingSkeleton() {
  return (
    <div className="product-listing">
      <div className="container">
        <Breadcrumbs />

        <ProductFiltersSkeleton/>

        <div className="product-listing__grid">
          {Array.from({ length: 9 }).map((_, index) => (
            <ProductBoxSkeleton key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductListingSkeleton;
