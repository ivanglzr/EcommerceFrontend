import { create } from "zustand";

import { ProductInterface } from "@/interfaces/product";

interface ProductsStoreInterface {
  products: ProductInterface[] | undefined;
  filteredProducts: ProductInterface[] | undefined;
  setProducts: (products: ProductInterface[]) => void;
  searchProducts: (query: string) => void;
  filterProductsByCategory: (category: string) => void;
}

export const useProductsStore = create<ProductsStoreInterface>((set, get) => ({
  products: undefined,
  filteredProducts: undefined,
  setProducts: (products: ProductInterface[]) =>
    set({ products, filteredProducts: products }),
  searchProducts: (query) => {
    if (query === "" || !query) {
      set({ filteredProducts: get().products });
      return;
    }

    const keywords = query.toLowerCase().split(" ");

    const products = get().products;

    if (!products) return;

    const newProducts = products?.filter((product) =>
      keywords.some(
        (keyword) =>
          product.name.toLowerCase().includes(keyword) ||
          product.description.toLowerCase().includes(keyword) ||
          product.category.toLowerCase().includes(keyword)
      )
    );

    set({ filteredProducts: newProducts });
  },
  filterProductsByCategory: (category) => {
    const products = get().products;

    if (!products) return;

    const newProducts = products?.filter(
      (product) => product.category === category
    );

    set({ filteredProducts: newProducts });
  },
}));
