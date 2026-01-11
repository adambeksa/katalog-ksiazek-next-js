import Skeleton from "@/modules/shared/ui/components/Skeleton/Skeleton"
import "./ProductFilters.scss";

function ProductFiltersSkeleton() {
    return (
        <div className="product-filters">
          <Skeleton width="100%" height="81px"/>
        </div>
    )
}

export default ProductFiltersSkeleton