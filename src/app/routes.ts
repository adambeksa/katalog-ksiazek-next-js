export const ROUTES = {
  HOME: { path: "/", label: "Strona Główna" },
  PRODUCTS: { path: "/products", label: "Katalog książek" },
  PRODUCT_DETAILS: {
    path: (id: string) => `/products/${id}`,
    label: "Szczegóły książki",
  },
};
