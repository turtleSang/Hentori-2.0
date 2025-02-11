import type { Metadata } from "next";
import "./globals.css";

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
      <body cz-shortcut-listen="false">{children}</body>
    </html>
  );
}
