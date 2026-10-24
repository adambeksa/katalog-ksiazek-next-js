import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Header } from "@/modules/shared/ui/components/Header/Header";
import { Footer } from "@/modules/shared/ui/components/Footer/Footer";
import "@/styles/globals.scss";
import "@/styles/layout.scss";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

export const metadata: Metadata = {
  title: "Biblioteka ABE",
  description: "Katalog książek z Wolne Lektury",
  robots: "noindex, nofollow",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();

  return (
    <html lang="pl">
      <body className={archivo.variable}>
        <NextIntlClientProvider messages={messages}>
          <div className="layout">
            <Header />
            <main className="layout__main">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
