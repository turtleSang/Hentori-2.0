"use client";
import ProductItemNav from "@/components/product-item-nav";
import { Category, TypeProduct } from "@/libs/defination";

export default function ProductNav({
  categoryList,
}: {
  categoryList: Category[];
}) {
  return (
    <div className="h-[50vh] pb-5 flex flex-row items-end bg-[url('/intro-product/background.jpg')] bg-cover bg-center">
      <div className="text-nowrap overflow-x-auto md:flex md:flex-row md:justify-around md:w-full">
        {categoryList.map((val, index) => {
          return <ProductItemNav category={val} key={index} />;
        })}
      </div>
    </div>
  );
}
