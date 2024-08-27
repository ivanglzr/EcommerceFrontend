export const ROUTES = {
  URL: "http://localhost:3900",
  LOGIN_USER: "/user/login",
  GET_PRODUCTS: "/product",
  GET_IMAGE: (imageName: string) => `/product/?image=${imageName}`,
};
