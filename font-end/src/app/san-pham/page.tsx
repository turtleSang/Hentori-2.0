import ListProductDefault from "@/layout/list-product-default";
import ProductNav from "@/layout/product-nav";
import { Suspense } from "react";

export default function Page() {
  return (
    <section>
      <ProductNav />
      <ListProductDefault />
    </section>
  );
}
