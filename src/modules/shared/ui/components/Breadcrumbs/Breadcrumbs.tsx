"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { ROUTES } from "@/app/routes";
import "./Breadcrumbs.scss";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbsProps {
  currentLabel?: string;
}

function Breadcrumbs({ currentLabel }: BreadcrumbsProps) {
  const pathname = usePathname();
  const t = useTranslations("nav");

  const items: BreadcrumbItem[] = [
    { label: t("home"), path: ROUTES.HOME.path },
  ];

  const segments = pathname.split("/").filter((segment) => segment !== "");
  let currentPath = "";

  segments.forEach((segment, index) => {
    currentPath += `/${segment}`;
    const isLast = index === segments.length - 1;

    let label: string | undefined;

    // Map route paths to translation keys
    if (currentPath === ROUTES.PRODUCTS.path) {
      label = t("products");
    }

    if (isLast && currentLabel) {
      label = currentLabel;
    }

    if (!label) {
      label = segment;
    }

    items.push({
      label,
      path: isLast ? undefined : currentPath,
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
