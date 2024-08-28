"use client";

import { ProductInterface } from "@/interfaces/product";

import { useProductsStore } from "@/store/products";
import { useEffect } from "react";

import Product from "./Product";

export default function Products({
  products,
}: {
  products: ProductInterface[];
}) {
  const filteredProducts = useProductsStore((state) => state.filteredProducts);
  const search = useProductsStore((state) => state.search);

  const setProducts = useProductsStore((state) => state.setProducts);

  useEffect(() => setProducts(products), [products, setProducts]);

  return (
    <main className="px-6 mb-6 bg-first-color">
      <h2 className="text-center text-3xl mt-4">
        {!search && "Products"}
        {search && "Results for: "}
        {search}
      </h2>
      <section className="grid grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] gap-6 mt-4">
        {filteredProducts?.map((product) => (
          <Product key={product._id} {...product} />
        ))}
      </section>
    </main>
  );
}
