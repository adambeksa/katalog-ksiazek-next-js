import axios, { AxiosInstance } from "axios";
import { Product } from "../../domain/Product";
import { IProductDto } from "../interfaces/IProductDto.interface";
import { IProductListDto } from "../interfaces/IProductListDto.interface";
import { mapListToProduct } from "../adapters/ProductListAdapter";
import { mapDetailToProduct } from "../adapters/ProductDetailAdapter";
import { extractLicenseData, LicenseData } from "../utils/productAdapterUtils";

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
      const licenseData = await this.getLicenseData(res.data.xml);
      return mapDetailToProduct(res.data, licenseData);
    } catch (error) {
      console.error(`Error fetching product ${id}:`, error);
      return null;
    }
  }

  // Pobiera tylko początek pliku XML - nagłówek z licencją mieści się w kilku KB
  private async getLicenseData(xmlUrl?: string): Promise<LicenseData | undefined> {
    if (!xmlUrl) return undefined;

    try {
      const res = await axios.get<string>(xmlUrl, {
        headers: { Range: "bytes=0-16383" },
        responseType: "text",
      });
      return extractLicenseData(res.data);
    } catch (error) {
      console.error(`Error fetching license from ${xmlUrl}:`, error);
      return undefined;
    }
  }
}
