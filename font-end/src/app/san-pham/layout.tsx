import ProductNav from "@/layout/product-nav";

export default function LayoutProduct({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
