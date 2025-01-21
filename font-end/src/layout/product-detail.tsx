import InfoProduct from "@/components/info-product";
import SliderProduct from "@/components/slider-product";
import { DataProduct } from "@/libs/defination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faSadCry,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function ProductDetail({ data }: { data?: DataProduct }) {
  if (!data) {
    return (
      <div className="px-8 py-8">
        <div className="bg-cyan-100 text-colorTextBlack p-5 text-center rounded-md">
          <h1 className="text-colorForeground text-3xl mb-5">
            Xin lỗi quý khách
          </h1>
          <FontAwesomeIcon
            className="text-5xl text-colorBackground mb-6"
            icon={faSadCry}
          />
          <h1 className="text-3xl">404 | Not Found</h1>
          <h2 className="text-2xl mb-6">Không tìm thấy thông tin sản phẩm</h2>
          <Link
            className="border-2 border-colorTextLogo p-2 rounded-lg duration-200 hover:bg-colorTextLogo"
            href={"/san-pham"}
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Trở về
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className=" px-8 py-8">
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2 p-5 bg-slate-50 text-colorTextBlack rounded-sm">
        <SliderProduct listImg={data?.listImg} />
        <InfoProduct
          description={data?.description}
          id={data.id}
          name={data.name}
          price={data.price}
          type={data.type}
        />
      </div>
    </div>
  );
}
