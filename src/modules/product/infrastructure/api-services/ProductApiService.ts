import axios, { AxiosInstance } from "axios";
import { Product } from "../../domain/Product";
import { IProductDto } from "../interfaces/IProductDto.interface";
import { IProductListDto } from "../interfaces/IProductListDto.interface";
import { mapListToProduct } from "../adapters/ProductListAdapter";
import { mapDetailToProduct } from "../adapters/ProductDetailAdapter";

export class ProductApiService {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: "https://wolnelektury.pl/api",
    });
  }

  async getAll(): Promise<Product[]> {
    try {
      const res = await this.client.get<IProductListDto[]>("/books");
      return res.data.map((item) => mapListToProduct(item));
    } catch (error) {
      console.error("Error fetching products:", error);
      return [];
    }
  }

  async getById(id: string): Promise<Product | null> {
    try {
      console.log(`Fetching product with ID: ${id}`);
      const res = await this.client.get<IProductDto>(`/books/${id}`);
      console.log(`Product fetched successfully:`, res.data);
      return mapDetailToProduct(res.data);
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      return null;
    }
  }
}
