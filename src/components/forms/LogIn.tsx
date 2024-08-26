"use client";

import FormGroup from "./FormGroup";

import { validateLogIn } from "@/schemas/forms";

import { LogInInterface } from "@/interfaces/user";

import { loginUser } from "@/services/user";

export default function LogIn() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const loginData = Object.fromEntries(new FormData(event.currentTarget));

    const loginDataParsed: LogInInterface = {
      email: loginData.email as string,
      password: loginData.password as string,
    };

    const { data, error } = validateLogIn(loginDataParsed);

    if (error) {
      alert(error.errors[0].message);
      return;
    }

    try {
      const res = await loginUser(data);

      alert(res.message);

      //TODO: redirect user to home page
    } catch (error) {
      alert(error);
    }
  };

  return (
    <form
      className="bg-second-color w-2/5 flex flex-col justify-between gap-4 mx-auto my-8 py-4 px-6 rounded-3xl"
      onSubmit={(event) => handleSubmit(event)}
    >
      <h1 className=" text-center text-4xl">Log In</h1>
      <FormGroup name="Email" id="email" type="email" />
      <FormGroup name="Password" id="password" type="password" />
      <button
        className="bg-third-color w-1/2 mt-4 mx-auto py-2 px-4 rounded-xl text-2xl hover:w-3/5 transition-all duration-500"
        type="submit"
      >
        Log In
      </button>
    </form>
  );
}
