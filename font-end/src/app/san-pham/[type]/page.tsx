import GroupListProduct from "@/components/group-list-product";
import ProductNav from "@/layout/product-nav";
import { TypeProduct } from "@/libs/defination";

function getTypeProduct(value: string): TypeProduct | undefined {
  return Object.values(TypeProduct).find((type) => type.toString() === value);
}

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const type = (await params).type;
  const typeProduct = getTypeProduct(type);

  return (
    <div>
      <ProductNav typeProduct={typeProduct} />
      <GroupListProduct typeProduct={typeProduct} />
    </div>
  );
}
