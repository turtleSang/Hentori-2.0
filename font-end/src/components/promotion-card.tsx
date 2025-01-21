import { Promotion } from "@/libs/defination";
import Link from "next/link";

export default function PromotionCard({ promotion }: { promotion: Promotion }) {
  const startDate: string = promotion.startDate.toLocaleDateString("vi-VN");
  const endDate: string = promotion.endDate.toLocaleDateString("vi-VN");

  return (
    <Link
      href={`khuyen-mai/${promotion.id}`}
      className="rounded-xl overflow-hidden"
    >
      <div
        style={{
          background: `url(${promotion.linkImgThumbPromotion})`,
          height: "300px",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="bg-slate-100 text-colorTextBlack px-2 py-4">
        <h1 className="text-3xl text-colorTextLogo">{promotion.name}</h1>
        <h3 className="text-slate-600 text-sm">
          Thời gian bắt đầu:
          <span className="ml-3 font-semibold">{startDate}</span>
        </h3>
        <h3 className="text-slate-600 text-sm">
          Thời gian kết thúc:
          <span className="ml-3 font-semibold"> {endDate} </span>
        </h3>
      </div>
    </Link>
  );
}
