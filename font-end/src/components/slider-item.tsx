import Image from "next/image";
import { useSwiperSlide } from "swiper/react";

export default function SliderItem({
  linkImg,
  name,
}: {
  linkImg: string;
  name: string;
}) {
  const slider = useSwiperSlide();
  return (
    <div>
      <Image src={linkImg} alt={name} width={400} height={300} />
    </div>
  );
}
