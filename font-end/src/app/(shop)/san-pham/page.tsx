import GroupListProduct from "@/components/group-list-product";
import { getCategory } from "@/hook/fetch-data-server";
import ListProductDefault from "@/layout/list-product-default";
import ProductNav from "@/layout/product-nav";
import { Category } from "@/libs/defination";

export default async function Page() {
  return (
    <section>
      <GroupListProduct />
    </section>
  );
}
