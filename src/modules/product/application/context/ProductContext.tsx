"use client";

import { createContext, useContext, ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { productFacade } from "../ProductFacade";
import { Product } from "../../domain/Product";

interface ProductContextType {
  productsCollection: Product[];
  loading: boolean;
  error: string | null;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export function ProductProvider({ children }: { children: ReactNode }) {
  const { data: productsCollection = [], isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: () => productFacade.getAllProducts(),
  });

  return (
    <ProductContext.Provider
      value={{
        productsCollection,
        loading: isLoading,
        error: error ? (error as Error).message : null,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProductContext() {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProductContext must be used within a ProductProvider");
  }
  return context;
}
