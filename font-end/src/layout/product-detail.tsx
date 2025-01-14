import InfoProduct from "@/components/info-product";
import SliderProduct from "@/components/slider-product";
import { DataProduct } from "@/libs/defination";

export default function ProductDetail({ data }: { data: DataProduct }) {
  return (
    <div className=" px-12 py-16 md:py-24">
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
