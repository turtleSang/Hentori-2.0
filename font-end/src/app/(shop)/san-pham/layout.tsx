import { getCategory } from "@/hook/fetch-data-server";
import ProductNav from "@/layout/product-nav";
import { Category } from "@/libs/defination";

export default async function LayoutProduct({
  children,
}: {
  children: React.ReactNode;
}) {
  const listCategory: Category[] = await getCategory();

  return (
    <section>
      <ProductNav categoryList={listCategory} />
      {children}
    </section>
  );
}
