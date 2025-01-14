"use client";

import { animated, useInView } from "@react-spring/web";
import clsx from "clsx";

export default function Content({
  content,
  title,
}: {
  content: string;
  title: string;
}) {
  const [ref, inView] = useInView({
    rootMargin: "-40%",
  });
  return (
    <animated.div
      ref={ref}
      className={clsx(
        "py-12  bg-opacity-70 duration-500",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      <h1 className="text-center text-colorTextLogo capitalize text-3xl md:text-4xl">
        {title}
      </h1>
      <p className="w-3/4 text-center mx-auto md:text-lg lg:text-xl">
        {content}
      </p>
    </animated.div>
  );
}
