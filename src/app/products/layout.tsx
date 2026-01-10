import ProductBreadcrumbs from "@/modules/product/presentation/components/ProductBreadcrumbs/ProductBreadcrumbs";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ProductBreadcrumbs />
      {children}
    </>
  );
}
