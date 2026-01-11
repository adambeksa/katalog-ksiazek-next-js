import Link from "next/link";
import { useTranslations } from "next-intl";
import { ROUTES } from "@/app/routes";
import "./MainBanner.scss";

function MainBanner() {
  const t = useTranslations("banner");

  return (
    <section className="banner">
      <h1 className="banner__title">{t("title")}</h1>
      <p className="banner__text">
        {t("text")}{" "}
        <a href="https://wolnelektury.pl/" className="banner__link">
          {t("source")}
        </a>
        . {t("description")}
      </p>
      <Link href={ROUTES.PRODUCTS.path} className="banner__cta">
        {t("cta")}
      </Link>
    </section>
  );
}

export default MainBanner;
