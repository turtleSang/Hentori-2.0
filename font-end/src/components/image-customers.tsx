"use client";
import clsx from "clsx";
import { garamaod } from "@/app/fonts/font";
import { useState } from "react";

export default function ImageCustomers({
  data,
}: {
  data: { name: string; link: string };
}) {
  const [active, setActive] = useState<boolean>(false);

  return (
    <div
      className="relative duration-200 overflow-hidden"
      onMouseEnter={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <img className="block w-full" src={data.link} alt={data.name} />
      <h3
        className={clsx(
          "absolute py-1 bottom-2 left-1/2 -translate-x-1/2 z-10 text-center text-colorTextBlack w-4/5 duration-200 border-colorTextLogo bg-colorHighlight border-2 rounded-md font-medium",
          garamaod.className,
          active
            ? "md:translate-y-0 md:opacity-100"
            : "md:translate-y-full md:opacity-0"
        )}
      >
        {data.name}
      </h3>
    </div>
  );
}
