"use client";
import stye from "@/app/style.module.css";
import clsx from "clsx";
import { IntroductionContent } from "@/libs/content";
import { garamaod } from "@/app/fonts/font";
import { useInView, animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";

export default function Introduction() {
  const [ref, inView] = useInView({ rootMargin: "-20%" });

  return (
    <div
      className={clsx(
        stye.backgroundIntro,
        "h-[60vh] md:h-[50vh]",
        garamaod.className
      )}
    >
      <div className={clsx(stye.backgroundGradient, "w-full h-full ")}>
        <div
          className={clsx("w-3/4 mx-auto h-full flex flex-col justify-center")}
        >
          <animated.h1
            ref={ref}
            className={clsx(
              "text-colorTextLogo text-center text-3xl duration-300 md:text-4xl lg:text-5xl",
              inView ? "translate-y-0 opacity-100" : "-translate-y-14 opacity-0"
            )}
          >
            {IntroductionContent.title}
          </animated.h1>
          <animated.p
            ref={ref}
            className={clsx(
              "duration-300 md:text-lg  lg:text-xl",
              inView ? "translate-y-0 opacity-100" : "translate-y-14 opacity-0"
            )}
          >
            {IntroductionContent.content}
          </animated.p>
        </div>
      </div>
    </div>
  );
}
