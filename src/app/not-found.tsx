import Link from "next/link";
import { ROUTES } from "./routes";

export default function NotFound() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Nie znaleziono strony</h2>
      <p>Przepraszamy, ale strona której szukasz nie istnieje.</p>
      <Link href={ROUTES.HOME} style={{ textDecoration: "underline", color: "blue" }}>
        Wróć do strony głównej
      </Link>
    </div>
  );
}
