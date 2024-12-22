"use client";
import Title from "@/components/title";
import { dataCustomer } from "@/libs/constance";
import clsx from "clsx";
import Link from "next/link";
import { garamaod } from "@/app/fonts/font";
import Content from "@/components/content";
import { useInView, useSpring, animated } from "@react-spring/web";
import { CustomerContent } from "@/libs/content";

export default function Customers() {
  const [refTitle, activeTitle] = useInView({ rootMargin: "-20%" });

  const props = useSpring({
    from: {
      opacity: activeTitle ? 0 : 1,
    },
    to: {
      opacity: activeTitle ? 1 : 0,
    },
    config: { tension: 170, friction: 26 }, // Điều chỉnh độ mượt
  });

  return (
    <div className="flex flex-col md:flex-row-reverse bg-colorTextBlack items-center py-12 md:py-0">
      <animated.div
        ref={refTitle}
        className={clsx(garamaod.className, "w-full md:w-1/2")}
        style={props}
      >
        <Title title={CustomerContent.title} />
        <Content content={CustomerContent.content} />
      </animated.div>
      <Link href="/khach-hang" className="grid grid-cols-4 w-full md:w-1/2">
        {dataCustomer.map((val, index) => {
          return (
            <img
              className={clsx(
                "block duration-200 hover:scale-125 hover:rounded-md row-span-1 col-span-1"
              )}
              src={val}
              alt=""
              key={index}
            ></img>
          );
        })}
      </Link>
    </div>
  );
}
