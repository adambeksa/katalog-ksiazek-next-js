export const ROUTES = {
  HOME: { path: "/" },
  PRODUCTS: { path: "/products" },
  PRODUCT_DETAILS: {
    path: (id: string) => `/products/${id}`,
  },
};
