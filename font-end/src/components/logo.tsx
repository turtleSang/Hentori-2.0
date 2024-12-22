"use client";

import Image from "next/image";
import { stencil } from "@/app/fonts/font";
import Link from "next/link";
import style from "@/app/style.module.css";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function Logo() {
  let [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setActive(true), 100);
  }, []);

  return (
    <Link
      href="/"
      className="flex flex-row justify-center md:justify-start items-center ml-5 md:py-3"
    >
      <Image
        src="/logo/icon.png"
        width={60}
        height={60}
        alt="Hentori Logo"
        className={clsx("hidden lg:inline-block w-auto h-auto", style.fadeIn1)}
      />
      <Image
        src="/logo/icon.png"
        width={50}
        height={50}
        alt="Hentori Logo"
        className={clsx(
          "hidden md:inline-block lg:hidden w-auto h-auto",
          style.fadeIn1
        )}
      />
      <Image
        src="/logo/icon.png"
        width={40}
        height={40}
        alt="Hentori Logo"
        className={clsx("inline-block md:hidden w-auto h-auto", style.fadeIn1)}
      />
      <h1
        className={`${stencil.className} text-colorTextLogo text-3xl ml-6 md:text-4xl lg:text-5xl  md:ml-1`}
      >
        <span
          className={clsx(
            "inline-block uppercase",
            style.fadeIn1,
            active ? "opacity-100" : "opacity-0"
          )}
        >
          Hen
        </span>
        <span
          className={clsx(
            "inline-block uppercase duration-200",
            style.fadeIn2,
            active ? "opacity-100" : "opacity-0"
          )}
        >
          to
        </span>
        <span
          className={clsx(
            "inline-block uppercase duration-300",
            style.fadeIn3,
            active ? "opacity-100" : "opacity-0"
          )}
        >
          ri
        </span>

        <p
          className={clsx(
            "block text-xl text-center",
            style.fadeIn1,
            active ? "opacity-100" : "opacity-0"
          )}
        >
          Bespoke
        </p>
      </h1>
    </Link>
  );
}
