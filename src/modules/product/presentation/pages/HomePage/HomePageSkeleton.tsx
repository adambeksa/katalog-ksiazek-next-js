import MainBanner from "@/modules/banner/presentation/components/MainBanner/MainBanner";
import PopularProductsSkeleton from "../../components/PopularProducts/PopularProductsSkeleton";
import "./HomePage.scss";

function HomePageSkeleton() {
  return (
    <div className="home">
      <div className="container">
        <MainBanner />
        <PopularProductsSkeleton />
      </div>
    </div>
  );
}

export default HomePageSkeleton;
