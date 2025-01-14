"use client";
import clsx from "clsx";
import Link from "next/link";
import { garamaod } from "@/app/fonts/font";
import Content from "@/components/content";
import { CustomerContent } from "@/libs/content";
import ImageCustomers from "@/components/image-customers";
import { use } from "react";

export default function Customers({
  dataCustomer,
}: {
  dataCustomer: Promise<{ name: string; link: string }[]>;
}) {
  const data = use<{ name: string; link: string }[]>(dataCustomer);

  return (
    <div className="flex flex-col md:flex-row-reverse bg-colorTextBlack items-center py-12 md:py-0">
      <div className={clsx(garamaod.className, "w-full md:w-1/2")}>
        <Content
          title={CustomerContent.title}
          content={CustomerContent.content}
        />
      </div>
      <Link
        href="/khach-hang"
        className="grid grid-cols-4 w-full gap-1 md:w-1/2"
      >
        {data.map((val, index) => {
          return <ImageCustomers data={val} key={index} />;
        })}
      </Link>
    </div>
  );
}
