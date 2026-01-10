import Link from "next/link";
import { ROUTES } from "@/app/routes";
import "./Navigation.scss";

export function Navigation() {
  return (
    <nav className="navigation">
      <Link href={ROUTES.HOME.path} className="navigation__link">
        Strona Główna
      </Link>
      <Link href={ROUTES.PRODUCTS.path} className="navigation__link">
        Katalog książek
      </Link>
    </nav>
  );
}
