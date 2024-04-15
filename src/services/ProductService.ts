import { AxiosResponse } from 'axios';
import { productServiceAPI } from '../http';
import { IProduct } from '../modules/product';

export class ProductService {
  static async getAllProducts(): Promise<AxiosResponse<IProduct[]>> {
    return productServiceAPI.get<IProduct[]>('/customer/product');
  }

  static async getProductById(id: string): Promise<AxiosResponse<IProduct>> {
    return productServiceAPI.get<IProduct>(`/customer/product/${id}`);
  }
}
