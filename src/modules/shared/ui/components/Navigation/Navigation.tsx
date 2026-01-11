import Link from "next/link";
import { useTranslations } from "next-intl";
import { ROUTES } from "@/app/routes";
import "./Navigation.scss";

export function Navigation() {
  const t = useTranslations("nav");

  return (
    <nav className="navigation">
      <Link href={ROUTES.HOME.path} className="navigation__link">
        {t("home")}
      </Link>
      <Link href={ROUTES.PRODUCTS.path} className="navigation__link">
        {t("products")}
      </Link>
    </nav>
  );
}
