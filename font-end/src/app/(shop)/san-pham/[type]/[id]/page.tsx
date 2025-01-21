import { GetProduct } from "@/hook/fetch-data-server";
import ProductDetail from "@/layout/product-detail";
import { DataProduct } from "@/libs/defination";

export default async function Page({
  params,
}: {
  params: Promise<{ type: string; id: string }>;
}) {
  let id: number = Number((await params).id);
  let dataProduct: DataProduct | undefined = await GetProduct(id);

  return <ProductDetail data={dataProduct} />;
}
