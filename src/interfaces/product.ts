export interface ProductInterface {
  _id?: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stock?: number;
  image: string | null;
}
