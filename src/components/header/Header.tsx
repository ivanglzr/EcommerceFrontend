import Link from "next/link";

import { CartIcon } from "../Icons";

import SearchInput from "./SearchInput";

export default function Header() {
  return (
    <header className="w-full grid grid-cols-[50%_30%_20%] items-center h-32 p-4 border-y-2 border-second-color">
      <h1 className="text-4xl mx-8">Ecommerce</h1>
      <SearchInput />
      <Link href={"/cart"} className="flex justify-center">
        <CartIcon width={36} height={36} />
      </Link>
    </header>
  );
}
