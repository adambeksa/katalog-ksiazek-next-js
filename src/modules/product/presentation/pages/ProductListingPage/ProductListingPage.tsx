"use client";

import { useState, useMemo, useEffect } from "react";
import { productFilterFacade } from "../../../application/ProductFilterFacade";
import { IProduct } from "../../../domain/interfaces/IProduct.interface";
import ProductBox from "../../components/ProductBox/ProductBox";

import ProductFilters from "../../components/ProductFilters/ProductFilters";
import "./ProductListingPage.scss";
import { IProductFilters } from "../../../domain/interfaces/IProductFilters.interface";
import { IFilterOptions } from "../../../domain/interfaces/IFilterOptions.interface";
import Breadcrumbs from "@/modules/shared/ui/components/Breadcrumbs/Breadcrumbs";

interface ProductListingPageProps {
  initialProducts: IProduct[];
}

function ProductListingPage({ initialProducts }: ProductListingPageProps) {
  const [filters, setFilters] = useState<IProductFilters>({
    author: "Wszystkie",
    epoch: "Wszystkie",
    genre: "Wszystkie",
    kind: "Wszystkie",
  });
  const [page, setPage] = useState(1);

  // Reset strony gdy filtry się zmienią
  useEffect(() => {
    setPage(1);
  }, [filters]);

  // Oblicz opcje filtrów na podstawie wszystkich produktów
  const filterOptions: IFilterOptions = useMemo(() => {
    return productFilterFacade.deriveFilterOptions(initialProducts);
  }, [initialProducts]);

  // Filtruj i paginuj produkty
  const { items: products, total } = useMemo(() => {
    return productFilterFacade.filterProducts(initialProducts, { filters, page });
  }, [initialProducts, filters, page]);

  const totalPages = Math.ceil(total / 20);

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

        <div className="product-listing__grid">
          {products.map((product) => (
            <ProductBox key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 ? (
          <div className="product-listing__empty">
            <p>Brak książek w wybranej kategorii.</p>
          </div>
        ) : (
          <div className="pagination">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="pagination__button"
            >
              Poprzednia
            </button>
            <span className="pagination__info">
              Strona {page} z {totalPages}
            </span>
            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="pagination__button"
            >
              Następna
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductListingPage;
