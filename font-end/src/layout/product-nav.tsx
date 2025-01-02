"use client";
import ProductItemNav from "@/components/product-item-nav";
import { LISTINTROPRODUCT } from "@/libs/constance";
import { TypeProduct } from "@/libs/defination";
import { createContext, SetStateAction, useEffect, useState } from "react";

export default function ProductNav({
  typeProduct,
}: {
  typeProduct?: TypeProduct;
}) {
  let [type, setType] = useState<TypeProduct | undefined>(typeProduct);

  function handleTypeProduct(type: TypeProduct) {
    setType(type);
  }

  return (
    <div className="h-[50vh] pb-5 flex flex-row items-end bg-[url('/intro-product/background.jpg')] bg-cover bg-center">
      <div className="text-nowrap overflow-x-auto md:flex md:flex-row md:justify-around md:w-full">
        {LISTINTROPRODUCT.map((val, index) => {
          return (
            <ProductItemNav
              link={val.introLink}
              name={val.name}
              linkImg={val.linkImg}
              key={index}
              handleClick={() => {
                handleTypeProduct(val.typeProduct);
              }}
              active={val.typeProduct === type}
            />
          );
        })}
      </div>
    </div>
  );
}
