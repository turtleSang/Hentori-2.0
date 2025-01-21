// import CSS
import "../globals.css";
// import font
import { montserrat } from "@/app/fonts/font";
import FooterInfo from "@/layout/footer-info";
import NavBar from "@/layout/nav-bar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={montserrat.className}>
      <NavBar />
      {children}
      <FooterInfo />
    </main>
  );
}
