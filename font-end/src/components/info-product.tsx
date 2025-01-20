import Link from "next/link";
import { BookingForm } from "./booking-form";

export default function InfoProduct({
  id,
  type,
  name,
  price,
  description,
}: {
  id: number;
  type: string;
  name: string;
  price: number;
  description: string;
}) {
  return (
    <div>
      <h5 className="text-colorForeground text-lg text-right">
        <Link href={`/san-pham/${type}`} replace>
          Loại sản phẩm: <span className="uppercase"> {type}</span>
        </Link>
      </h5>
      <h4 className="text-right text-base text-slate-400">Mã sản phẩm: {id}</h4>
      <h2 className="uppercase my-3 font-medium text-4xl text-colorForeground text-left">
        {name}
      </h2>
      <h3 className="text-2xl text-colorTextLogo ">
        Giá sản phẩm: {price.toLocaleString("vi-VN")} <sup>đ</sup>{" "}
      </h3>
      <p className="text-gray-500 text-lg my-5">
        <span className="underline ">Mô tả:</span> {description}
      </p>
      <BookingForm id={id} />
    </div>
  );
}
