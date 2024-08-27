"use client";

import { inputStyles } from "@/css/styles";

import { SearchIcon } from "../Icons";

import { useCallback, useMemo } from "react";
import { useProductsStore } from "@/store/products";

import debounce from "just-debounce-it";

export default function SearchInput() {
  const searchProducts = useProductsStore((state) => state.searchProducts);

  const debouncedSearchProducts = useMemo(
    () => debounce((search: string) => searchProducts(search), 300),
    [searchProducts]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      debouncedSearchProducts(event.currentTarget.value),
    [debouncedSearchProducts]
  );

  return (
    <div className="flex justify-between items-center gap-4">
      <SearchIcon width={24} height={24} />
      <input
        className={`w-[calc(100%-24px)] ${inputStyles}`}
        type="text"
        name="search"
        id="search"
        placeholder="What product do you want?"
        onChange={(event) => handleChange(event)}
      />
    </div>
  );
}
