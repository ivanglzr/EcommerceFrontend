import { getProducts } from "@/services/product";

export default async function useProducts() {
  try {
    const { products } = await getProducts();

    return products;
  } catch (error) {
    return [];
  }
}
