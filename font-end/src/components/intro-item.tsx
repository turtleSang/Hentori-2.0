"use client";
import { ItemIntro } from "@/libs/defination";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function IntroItem({ introItem }: { introItem: ItemIntro }) {
  let [hover, setHover] = useState<boolean>(false);

  return (
    <Link
      href={introItem.introLink}
      className={clsx(
        "relative overflow-hidden rounded-xl w-9/12 h-[350px] my-3 md:w-1/5 duration-200",
        hover && "scale-95"
      )}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <Image
        src={introItem.linkImg}
        alt={introItem.linkImg}
        fill
        sizes="(max-width: 768px) 75vw, (max-width: 1024px) 20vw"
        style={{ objectFit: "cover", display: "block" }}
      />
      <div
        className={clsx(
          "absolute w-full h-full bg-colorHighlight z-20 duration-200",
          hover ? "opacity-20" : "opacity-0"
        )}
      ></div>
      <h3
        className={clsx(
          "absolute z-20 text-center bottom-0 left-1/2 -translate-x-1/2 text-3xl"
        )}
      >
        {introItem.name}
      </h3>
    </Link>
  );
}