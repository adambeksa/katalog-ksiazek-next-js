"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/app/routes";
import "./Breadcrumbs.scss";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  /** Opcjonalna dynamiczna etykieta dla ostatniego segmentu (np. nazwa produktu) */
  currentLabel?: string;
}

function Breadcrumbs({ currentLabel }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Zbuduj breadcrumbs na podstawie pathname
  const items: BreadcrumbItem[] = [
    { label: ROUTES.HOME.label, path: ROUTES.HOME.path },
  ];

  const segments = pathname.split("/").filter((segment) => segment !== "");
  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    // Znajdź etykietę w ROUTES
    const routeEntry = Object.values(ROUTES).find((route) => {
      if (typeof route.path === "string") {
        return route.path === currentPath;
      }
      return false;
    });

    let label = routeEntry?.label;

    // Dla ostatniego segmentu użyj dynamicznej etykiety jeśli podano
    if (isLast && currentLabel) {
      label = currentLabel;
    }

    // Fallback dla nieznanych segmentów
    if (!label) {
      label = segment;
    }

    items.push({
      label,
      path: isLast ? undefined : currentPath, // Ostatni element bez linku
    });
  });

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ul className="breadcrumbs__list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumbs__item">
            {item.path ? (
              <Link href={item.path} className="breadcrumbs__link">
                {item.label}
              </Link>
            ) : (
              <span className="breadcrumbs__current" aria-current="page">
                {item.label}
              </span>
            )}
            {index < items.length - 1 && (
              <span className="breadcrumbs__separator" aria-hidden="true">
                &rsaquo;
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Breadcrumbs;
