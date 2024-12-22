"use client";
import { garamaod, stencil } from "@/app/fonts/font";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useInView, useSpring, animated, config } from "@react-spring/web";
import clsx from "clsx";
import { useEffect } from "react";

export default function TitleCarousel() {
  const [ref, inView] = useInView();
  const style = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(50px)",
    },
    to: {
      opacity: 1,
      transform: "translateY(0)",
    },
    config: config.gentle,
  });

  return (
    <animated.div
      ref={ref}
      className={
        "text-colorTextLogo text-center absolute -z-10 bottom-24 md:bottom-5"
      }
      style={style}
    >
      <h1 className={clsx(stencil.className, "text-5xl md:text-6xl uppercase")}>
        Henotri
      </h1>
      <h2 className={clsx(stencil.className, "text-4xl md:text-5xl")}>
        Bespoke
      </h2>
      <h3
        className={clsx(
          garamaod.className,
          "text-colorText text-4xl md:text-5xl uppercase"
        )}
      >
        Âu phục dành riêng cho bạn
      </h3>
      <p className="text-colorText w-full text-5xl text-center animate-bounce">
        <FontAwesomeIcon icon={faChevronDown} className="w-11 block mx-auto" />
      </p>
    </animated.div>
  );
}
