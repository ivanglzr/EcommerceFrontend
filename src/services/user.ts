import { ROUTES } from "./constants";

import { BackendResponseInterface } from "@/interfaces/responses";
import { LogInInterface } from "@/interfaces/user";

import { handleErrors, validateResponse } from "./functions";

export async function loginUser(
  loginData: LogInInterface
): Promise<BackendResponseInterface> {
  try {
    const petition = await fetch(ROUTES.URL + ROUTES.LOGIN_USER, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const res: BackendResponseInterface = await petition.json();

    validateResponse(res, petition.status);

    return res;
  } catch (error) {
    throw handleErrors(error);
  }
}
