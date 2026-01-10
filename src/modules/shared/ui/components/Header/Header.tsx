import Link from "next/link";
import { ROUTES } from "@/app/routes";
import { Navigation } from "../Navigation/Navigation";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <Link href={ROUTES.HOME.path} className="header__logo">
          <h1 className="header__title">Biblioteka ABE</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
