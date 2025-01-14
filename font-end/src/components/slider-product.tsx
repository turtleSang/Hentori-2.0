"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
// swiper style
import "swiper/css";
import "swiper/swiper-bundle.css";
// require module
import { Navigation, Thumbs, Zoom } from "swiper/modules";
import { useState } from "react";
import { dataCustomer } from "@/libs/constance";
import clsx from "clsx";

// CSS Configs

export default function SliderProduct({ listImg }: { listImg?: string[] }) {
  const [thumb, setThumbs] = useState<any>(null);

  return (
    <div>
      <Swiper
        zoom={true}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Thumbs, Navigation, Zoom]}
        thumbs={{ swiper: thumb }}
        navigation={true}
      >
        {dataCustomer.map((value, index) => (
          <SwiperSlide key={index}>
            <Image
              className="mx-auto rounded-lg"
              src={value.link}
              alt={value.name}
              width={400}
              height={400}
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className={clsx("mt-4 mySwiper")}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        modules={[Thumbs, Navigation, Zoom]}
        watchSlidesProgress
        onSwiper={(swiper) => setThumbs(swiper)}
      >
        {dataCustomer.map((value, index) => (
          <SwiperSlide key={index}>
            <Image
              className="rounded-md cursor-pointer"
              src={value.link}
              alt={value.name}
              width={400}
              height={400}
            ></Image>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
