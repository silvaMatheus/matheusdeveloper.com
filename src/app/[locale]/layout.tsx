import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Provider from "@/provider";
import { unstable_setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "../styles.css";

const biotif = localFont({
  src: "../../../public/fonts/Biotif-Regular.woff",
  weight: "400",
  style: "normal",
  variable: "--font-biotif",
});

type Props = {
  children: ReactNode;
  modal: ReactNode;
  params: { locale: string };
};

export default async function LocaleLayout({
  children,
  params: { locale },
  modal,
}: Props) {
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={`${biotif.className} no-scrollbar`}>
        <Provider>
          <main className="max-w-screen flex flex-col gap-20">
            <Header />
            {children}
            <Footer />
            {modal}
          </main>
        </Provider>
      </body>
    </html>
  );
}
