import { CustomerContent } from "@/libs/content";

import Content from "../content";
import { garamaod } from "@/app/fonts/font";
import clsx from "clsx";

export default function CustomersImgSkeleton() {
  let arr = Array(10).fill("_");
  return (
    <div className="flex flex-col md:flex-row-reverse bg-colorTextBlack items-center py-12 md:py-0">
      <div className={clsx(garamaod.className, "w-full md:w-1/2")}>
        <Content
          title={CustomerContent.title}
          content={CustomerContent.content}
        />
      </div>
      <div className="grid grid-cols-4 w-full gap-1 md:w-1/2">
        {arr.map((val, index) => {
          return (
            <div
              className="w-full h-72 bg-colorForeground animate-pulse rounded-md"
              key={index}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
