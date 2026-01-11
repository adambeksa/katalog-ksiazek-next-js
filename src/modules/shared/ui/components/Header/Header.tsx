import Link from "next/link";
import { useTranslations } from "next-intl";
import { ROUTES } from "@/app/routes";
import { Navigation } from "../Navigation/Navigation";
import "./Header.scss";

export function Header() {
  const t = useTranslations("meta");

  return (
    <header className="header">
      <div className="header__container">
        <Link href={ROUTES.HOME.path} className="header__logo">
          <h1 className="header__title">{t("title")}</h1>
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
