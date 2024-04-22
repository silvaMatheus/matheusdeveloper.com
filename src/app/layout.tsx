import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { ReactNode } from "react";
import "./styles.css";

type Props = {
  children: ReactNode;
};

export async function generateMetadata({}: Omit<
  Props,
  "children"
>): Promise<Metadata> {
  return {
    metadataBase: new URL("https://matheusdeveloper.com"),
    title: "Matheus - Full Stack Developer",
    creator: "Matheus Silva",
    category: "developer",
    description:
      "Matheus, an experienced Full Stack Developer, building modern and responsive web applications.",
    keywords: [
      "Matheus Silva",
      "Full Stack Developer",
      "Next.Js",
      "React",
      "Matheus Desenvolvimento de Software",
    ],
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        pt: "/pt",
      },
    },
    openGraph: {
      title: "Matheus - Full Stack Developer",
      siteName: "Matheus Developer",
      description:
        "Matheus, an experienced Full Stack Developer, building modern and responsive web applications.",
      images: [
        {
          url: "/fullLogo.png",
          width: 800,
          height: 600,
          alt: "Matheus - Full Stack Developer",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Matheus - Full Stack Developer",
      description:
        "Matheus, an experienced Full Stack Developer, building modern and responsive web applications.",
      images: "/fullLogo.png",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
    },
  };
}

export default function RootLayout({ children }: Props) {
  return (
    <>
      <head>
        <link
          rel="apple-touch-icon"
          href="/apple-icon.png"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>

      {children}
      <Analytics />
      <SpeedInsights />
    </>
  );
}
