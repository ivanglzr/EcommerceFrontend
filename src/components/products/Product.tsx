/* eslint-disable @next/next/no-img-element */

import { ProductInterface } from "@/interfaces/product";

import { getImageURL } from "@/services/functions";

export default function Product({
  name,
  description,
  category,
  price,
  stock,
  image,
}: ProductInterface) {
  return (
    <article className="bg-second-color shadow-md rounded-lg overflow-hidden flex flex-col p-4 w-full max-w-xs mx-auto">
      <img
        src={getImageURL(image)}
        alt={name}
        className="w-full h-40 object-cover mb-4"
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-sm text-font-color mb-2 line-clamp-2">
          {description}
        </p>
        <span className="text-xl font-bold mb-2">${price}</span>
        <span
          className={`text-sm font-medium ${
            stock === 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          Stock: {stock}
        </span>
        <span className="text-sm text-font-color">{category}</span>
      </div>
    </article>
  );
}
