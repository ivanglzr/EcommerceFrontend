import { ROUTES } from "./constants";

import { GetProductsResponseInterface } from "@/interfaces/responses";

import { handleErrors, validateResponse } from "./functions";

export async function getProducts(): Promise<GetProductsResponseInterface> {
  try {
    const petition = await fetch(ROUTES.URL + ROUTES.GET_PRODUCTS);
    const res = await petition.json();

    validateResponse(res, petition.status);

    return res;
  } catch (error) {
    throw handleErrors(error);
  }
}
