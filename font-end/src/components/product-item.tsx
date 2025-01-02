import { DataProduct } from "@/libs/defination";
import { FormatNumber } from "@/libs/function";
import Image from "next/image";
import Link from "next/link";

export default function ProductItem({ item }: { item: DataProduct }) {
  return (
    <Link
      href={`/san-pham/${item.type}/${item.id}`}
      className="bg-colorHighlight p-4 rounded-md shadow-lg"
    >
      <Image
        width={240}
        height={240}
        src={item.thumbImg}
        alt={item.name}
        className="block mx-auto rounded-md"
      ></Image>
      <div>
        <h4 className="text-colorForeground text-start text-base font-semibold uppercase my-1 lg:text-xl">
          {item.name}
        </h4>
        <h5 className="text-colorTextGreen font-bold text-sm lg:text-lg">
          {FormatNumber(item.price)} <sup className="">đ</sup>
        </h5>
        <p className="truncate text-xs text-colorTextBlack my-1 lg:text-base">
          {item.description}
        </p>
      </div>
    </Link>
  );
}
