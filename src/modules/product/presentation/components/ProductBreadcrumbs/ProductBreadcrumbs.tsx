"use client";

import { usePathname } from "next/navigation";
import { ROUTES } from "@/app/routes";
import Breadcrumbs from "@/modules/shared/ui/components/Breadcrumbs/Breadcrumbs";
import { useProductQuery } from "../../../hooks/useProductQuery";

export default function ProductBreadcrumbs() {
  const pathname = usePathname();
  const isProductPage = pathname?.startsWith("/products/") && pathname !== "/products";
  
  // Extract ID from path like /products/123
  const productId = isProductPage ? pathname.split("/").pop() : null;

  // Always call the hook, handle conditional logic inside or via `enabled` if hook supports it
  // Since useProductQuery uses standard React Query, we can just call it.
  // Ideally, useProductQuery should be robust enough to handle null/undefined if we pass it,
  // but looking at usage `useProductQuery(productId)`, let's pass empty string if null to be safe
  // or rely on enabled: !!productId if the hook exposes query options.
  // Assuming simple wrapper:
  const { data: product } = useProductQuery(productId || "");

  const items: { label: string; path?: string }[] = [
    { label: "Strona Główna", path: ROUTES.HOME },
    { label: "Katalog książek", path: ROUTES.PRODUCTS },
  ];

  if (isProductPage && product) {
    items.push({ label: product.name });
  }

  return (
      <div className="container">
        <Breadcrumbs items={items} />
      </div>
  );
}
