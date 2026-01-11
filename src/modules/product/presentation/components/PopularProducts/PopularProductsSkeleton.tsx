import Skeleton from "@/modules/shared/ui/components/Skeleton/Skeleton";
import ProductBoxSkeleton from "../ProductBox/ProductBoxSkeleton";
import "./PopularProducts.scss";

function PopularProductsSkeleton() {
  return (
    <section className="popular-products">
      <h2 className="popular-products__title">Popularne lektury</h2>
      <div className="popular-products__grid">
        {Array.from({ length: 3 }).map((_, index) => (
          <ProductBoxSkeleton key={index} />
        ))}
      </div>
    </section>
  );
}

export default PopularProductsSkeleton;
