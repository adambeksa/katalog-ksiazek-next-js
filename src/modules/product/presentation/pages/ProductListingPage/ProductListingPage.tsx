"use client";

import { useState, useMemo, useEffect } from "react";
import { useTranslations } from "next-intl";
import { productFilterFacade } from "../../../application/ProductFilterFacade";
import { IProduct } from "../../../domain/interfaces/IProduct.interface";
import ProductBox from "../../components/ProductBox/ProductBox";
import ProductListingHead from "./ProductListingHead";

import ProductFilters from "../../components/ProductFilters/ProductFilters";
import "./ProductListingPage.scss";
import { IProductFilters } from "../../../domain/interfaces/IProductFilters.interface";
import { IFilterOptions } from "../../../domain/interfaces/IFilterOptions.interface";
import Breadcrumbs from "@/modules/shared/ui/components/Breadcrumbs/Breadcrumbs";

const PAGE_SIZE = 20;

interface ProductListingPageProps {
  initialProducts: IProduct[];
}

function ProductListingPage({ initialProducts }: ProductListingPageProps) {
  const t = useTranslations("products");
  const tCommon = useTranslations("common");

  const [filters, setFilters] = useState<IProductFilters>({
    author: tCommon("all"),
    epoch: tCommon("all"),
    genre: tCommon("all"),
    kind: tCommon("all"),
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [filters]);

  const filterOptions: IFilterOptions = useMemo(() => {
    return productFilterFacade.deriveFilterOptions(initialProducts);
  }, [initialProducts]);

  const { items: products, total } = useMemo(() => {
    return productFilterFacade.filterProducts(initialProducts, { filters, page });
  }, [initialProducts, filters, page]);

  const totalPages = Math.ceil(total / PAGE_SIZE);

  const handleFilterChange = (key: keyof IProductFilters, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="product-listing">
      <div className="container">
        <Breadcrumbs />
        <ProductFilters
          filters={filters}
          filterOptions={filterOptions}
          onFilterChange={handleFilterChange}
        />

        <ProductListingHead />
        <div
          className="product-listing__grid"
          style={{ counterReset: `book ${(page - 1) * PAGE_SIZE}` }}
        >
          {products.map((product) => (
            <ProductBox key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 ? (
          <div className="product-listing__empty">
            <p>{t("listing.empty")}</p>
          </div>
        ) : (
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="pagination__button"
            >
              {t("pagination.previous")}
            </button>
            <span className="pagination__info">
              {t("pagination.pageInfo", { page, total: totalPages })}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="pagination__button"
            >
              {t("pagination.next")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
