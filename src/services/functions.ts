import { ROUTES } from "./constants";

import { BackendResponseInterface } from "@/interfaces/responses";

import {
  ForbiddenError,
  UnauthorizedError,
  StatusError,
} from "@/errors/errors";

export function validateResponse(
  res: BackendResponseInterface,
  statusCode: number
) {
  if (statusCode === 403) throw new ForbiddenError(res.message);
  if (statusCode === 401) throw new UnauthorizedError(res.message);
  if (res.status === "error") throw new StatusError(res.message);
}

export function handleErrors(error: unknown) {
  if (error instanceof ForbiddenError) {
    window.location.href = "/forbidden";
    throw error;
  }
  if (error instanceof UnauthorizedError) {
    window.location.href = "/login";
    throw error;
  }

  throw error;
}

export function getImageURL(imageName: string) {
  return ROUTES.URL + ROUTES.GET_IMAGE(imageName);
}
