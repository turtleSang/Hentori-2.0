import { Category } from "@/libs/defination";
import clsx from "clsx";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function ProductItemNav({ category }: { category: Category }) {
  const params = useParams<{ type: string }>();

  return (
    <Link
      className={clsx(
        "relative inline-block w-48 h-48 overflow-hidden ml-4 mr-4 rounded-md duration-200",
        params.type === category.link &&
          "border-2 border-colorTextLogo shadow-xl"
      )}
      href={`/san-pham/${category.link}`}
    >
      <img
        className="block w-full"
        src={category.linkImg}
        alt={category.altImg}
      />
      <h3 className="absolute py-1 bottom-2 left-1/2 -translate-x-1/2 z-10 text-center w-4/5 font-medium">
        {category.name}
      </h3>
    </Link>
  );
}
