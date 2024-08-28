import Header from "@/components/header/Header";
import Products from "@/components/products/Products";

import useProducts from "@/hooks/useProducts";

export default async function HomePageView() {
  const products = await useProducts();

  return (
    <div id="container" className="h-full">
      <Header />
      <Products products={products} />
    </div>
  );
}
