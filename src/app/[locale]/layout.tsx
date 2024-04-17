import Header from "@/components/Layout/Header";
import Provider from "@/provider";
import { unstable_setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { locales } from "../../config";
import "../styles.css";

const biotif = localFont({
  src: "../../../public/fonts/Biotif-Regular.woff",
  weight: "400",
  style: "normal",
  variable: "--font-biotif",
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${biotif.className} no-scrollbar`}>
        <Provider>
          <main className="max-w-screen flex flex-col gap-20">
            <Header />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}
