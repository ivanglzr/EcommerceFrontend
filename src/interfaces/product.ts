export interface ProductInterface {
  name: string;
  description: string;
  category: string;
  price: number;
  stock?: number;
  image: string | null;
}
