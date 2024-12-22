"use client";
import IntroItem from "@/components/intro-item";
import { LISTINTROPRODUCT } from "@/libs/constance";
import Style from "@/app/style.module.css";
import { garamaod } from "@/app/fonts/font";
import clsx from "clsx";
import { animated, useInView, useSprings } from "@react-spring/web";
import { useEffect } from "react";
import Title from "@/components/title";
import Content from "@/components/content";

export default function IntroProduct() {
  const [ref, inView] = useInView({
    rootMargin: "-40%",
  });
  const title = "SẢN PHẨM CỦA CHÚNG TÔI";
  const content = `Sản phẩm bespoke cao cấp là sự kết hợp hoàn hảo giữa nghệ thuật thủ
          công tinh tế và phong cách cá nhân hóa. Mỗi chi tiết đều được chế tác
          tỉ mỉ, đảm bảo vừa vặn tuyệt đối và thể hiện đẳng cấp riêng biệt. Đây
          chính là lựa chọn hoàn hảo cho những ai trân trọng sự độc đáo và sang
          trọng`;

  return (
    <div className={clsx(Style.backgroundIntroProduct, garamaod.className)}>
      <animated.div
        ref={ref}
        className={clsx(
          "py-12 bg-black bg-opacity-70 duration-500",
          inView ? "opacity-100" : "opacity-0"
        )}
      >
        <Title title={title} />
        <Content content={content} />
        <div className="flex flex-col justify-around items-center md:flex-row">
          {LISTINTROPRODUCT.map((val, index) => (
            <IntroItem introItem={val} key={index} />
          ))}
        </div>
      </animated.div>
    </div>
  );
}
