import Link from "next/link";

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
      <p className="text-gray-500 text-lg my-10">
        <span className="underline ">Mô tả:</span> {description}
      </p>
      <div className="flex justify-around">
        <button
          className="inline-block w-2/5 border-2 border-colorForeground bg-colorForeground text-colorHighlight py-3 rounded-sm hover:bg-colorTextLogo hover:text-colorTextBlack hover:border-colorTextLogo duration-200"
          type="button"
        >
          Đặt hàng
        </button>
        <button
          className="inline-block w-2/5 border-2 border-colorTextLogo py-3 hover:bg-colorTextLogo duration-200"
          type="button"
        >
          Liên hệ
        </button>
      </div>
    </div>
  );
}
