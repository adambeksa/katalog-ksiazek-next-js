import Link from "next/link";
import { ROUTES } from "./routes";
import "@/styles/not-found.scss";

export default function NotFound() {
  return (
    <div className="container not-found">
      <h1>Nie znaleziono strony</h1>
      <p>Przepraszamy, ale strona której szukasz nie istnieje.</p>
      <Link href={ROUTES.HOME.path} className="not-found__link">
        Wróć do strony głównej
      </Link>
    </div>
  );
}
