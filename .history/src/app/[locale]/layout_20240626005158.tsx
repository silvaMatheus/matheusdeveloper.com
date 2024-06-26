import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Provider from "@/provider";
import { unstable_setRequestLocale } from "next-intl/server";
import localFont from "next/font/local";
import { ReactNode } from "react";

import Head from "next/head";
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
      <Head>
        <script defer type="text/javascript" src="https://datapulse.app/datapulse.min.js" id="datapulse" data-endpoint="https://datapulse.app/api/v1/event" data-workspace="clxva7hl7zr3wbv31peiqt1cz" />

      </Head>

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
