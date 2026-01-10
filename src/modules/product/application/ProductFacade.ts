import { Product } from "../domain/Product";
import { ProductApiService } from "../infrastructure/api-services/ProductApiService";

export class ProductFacade {
  private productDataService: ProductApiService;

  constructor(productDataService: ProductApiService) {
    this.productDataService = productDataService;
  }

  async getAllProducts(): Promise<Product[]> {
    return await this.productDataService.getAll();
  }

  async getProductById(id: string): Promise<Product | null> {
    return await this.productDataService.getById(id);
  }
}

const productDataService = new ProductApiService();
export const productFacade = new ProductFacade(productDataService);
