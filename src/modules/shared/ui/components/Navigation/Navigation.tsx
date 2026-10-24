"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { ROUTES } from "@/app/routes";
import "./Navigation.scss";

export function Navigation() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  return (
    <nav className="navigation">
      <Link
        href={ROUTES.HOME.path}
        className="navigation__link"
        aria-current={pathname === ROUTES.HOME.path ? "page" : undefined}
      >
        {t("home")}
      </Link>
      <Link
        href={ROUTES.PRODUCTS.path}
        className="navigation__link"
        aria-current={pathname === ROUTES.PRODUCTS.path ? "page" : undefined}
      >
        {t("products")}
      </Link>
    </nav>
  );
}
