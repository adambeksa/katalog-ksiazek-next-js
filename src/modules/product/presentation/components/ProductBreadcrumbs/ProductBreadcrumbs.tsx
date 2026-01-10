"use client";

import { usePathname } from "next/navigation";
import { useProductQuery } from "../../../hooks/useProductQuery";
import { useBreadcrumbs } from "@/modules/shared/ui/hooks/useBreadcrumbs";
import Breadcrumbs from "@/modules/shared/ui/components/Breadcrumbs/Breadcrumbs";

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

  // The hook handles the logic of mapping paths and injecting dynamic label
  // If product is not loaded yet, it might show ID or empty, depending on hook logic.
  // We can pass product?.name. If undefined, it falls back to segment (ID).
  const items = useBreadcrumbs(product?.name);

  return (
      <div className="container">
        <Breadcrumbs items={items} />
      </div>
  );
}
