import { z } from "zod";

import { LogInInterface } from "@/interfaces/user";

const LogInSchema = z.object({
  email: z.string().email("Email isn't valid"),
  password: z.string().min(8, "Password is too short"),
});

export function validateLogIn(loginData: LogInInterface) {
  return LogInSchema.safeParse(loginData);
}
