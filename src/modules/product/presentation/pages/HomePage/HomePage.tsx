import "./HomePage.scss";
import PopularProducts from "../../components/PopularProducts/PopularProducts";
import MainBanner from "../../../../banner/presentation/components/MainBanner/MainBanner";
import { Product } from "@/modules/product/domain/Product";

interface HomePageProps {
  popularProducts: Product[];
}

function HomePage({ popularProducts }: HomePageProps) {
  return (
    <div className="home">
      <div className="container">
        <MainBanner />
        <PopularProducts products={popularProducts} />
      </div>
    </div>
  );
}

export default HomePage;
