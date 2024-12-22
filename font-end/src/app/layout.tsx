import type { Metadata } from "next";

import "./globals.css";
import { montserrat } from "./fonts/font";
import NavBar from "@/layout/nav-bar";
import { Suspense } from "react";
import Loading from "./loading";
import FooterInfo from "@/layout/footer-info";

export const metadata: Metadata = {
  title: "Hentori",
  description: "Âu phục tại Bình Dương",
  creator: "Thank Sang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className={`${montserrat.className}`} cz-shortcut-listen="false">
        <Suspense fallback={<Loading />}>
          <NavBar />
          {children}
        </Suspense>
        <FooterInfo />
      </body>
    </html>
  );
}
