"use client";
import { DataProduct, TypeProduct, TypeSort } from "@/libs/defination";
import GroupBtnShort from "./group-btn-short";
import { useEffect, useState } from "react";
import ProductItem from "./product-item";
import { DataProductFake, useProductFake } from "@/hook/fetch-fake-data";
import GroupProductItemSkeleton from "./skeleton/group-product-skeleton";

export default function GroupListProduct({
  typeProduct,
}: {
  typeProduct?: TypeProduct;
}) {
  const [typeSort, setTypeSort] = useState<TypeSort>(TypeSort.HightLight);
  const { data, isError, isLoading } = useProductFake(typeSort, typeProduct);

  function handleSort(typeSort: TypeSort) {
    setTypeSort(typeSort);
  }
  if (isLoading) {
    return (
      <div>
        <GroupBtnShort typeSort={typeSort} handleSort={handleSort} />
        <GroupProductItemSkeleton />
      </div>
    );
  }

  if (isError) {
    return <>Errro</>;
  }

  return (
    <div>
      <GroupBtnShort typeSort={typeSort} handleSort={handleSort} />
      <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-7 pb-4">
        {(data as DataProduct[]).map((val) => (
          <ProductItem item={val} key={val.id} />
        ))}
      </div>
    </div>
  );
}
