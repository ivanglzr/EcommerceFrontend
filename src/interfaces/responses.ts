import { ProductInterface } from "./product";

export interface BackendResponseInterface {
  status: "success" | "error";
  message: string;
}

export interface GetProductsResponseInterface extends BackendResponseInterface {
  products: ProductInterface[];
}
