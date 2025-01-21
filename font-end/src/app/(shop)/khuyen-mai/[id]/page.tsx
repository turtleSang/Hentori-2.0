import { getDetailPromotion } from "@/hook/fetch-data-server";
import { Promotion } from "@/libs/defination";
import { bg } from "date-fns/locale";
import { url } from "inspector";

export default async function Page({
  params,
}: {
  params: Promise<{ id: number }>;
}) {
  const id = (await params).id;
  const promotion: Promotion | undefined = await getDetailPromotion(id);

  if (promotion) {
    return (
      <div className="pt-24 pb-4 px-5 ">
        <div className="bg-slate-100 text-colorTextBlack rounded-xl overflow-hidden">
          <div
            style={{
              backgroundImage: `url(${promotion.linkImgThumbPromotion})`,
              height: "300px",
              backgroundSize: "cover",
            }}
          ></div>
          <h1 className="py-5 pl-7 text-colorTextLogo text-3xl">
            {promotion.name}
          </h1>
          <h2 className="pl-5 text-slate-600">
            Thời điểm bắt đầu:{" "}
            <span className="font-semibold">
              {promotion.startDate.toLocaleDateString("vi-VN")}
            </span>
          </h2>
          <h2 className="pl-5 text-slate-600">
            Thời điểm kết thúc:{" "}
            <span className="font-semibold">
              {promotion.endDate.toLocaleDateString("vi-VN")}
            </span>
          </h2>
          <p className="p-4">{promotion.description}</p>
        </div>
      </div>
    );
  } else {
    return <div>Not found</div>;
  }
}
