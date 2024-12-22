"use client";
import { animated, easings, useSpring } from "@react-spring/web";
import { transform } from "next/dist/build/swc/generated-native";
import Image from "next/image";

export default function CustomerCarousel() {
  const styles = useSpring({
    loop: { reverse: true },
    from: { transform: "translateY(0px)" },
    to: { transform: "translateY(-20px)" },
    config: { duration: 2000 },
  });
  return (
    <div className="relative bg-colorTextBlack h-[100vh]">
      <animated.div style={styles}>
        <Image
          height={300}
          width={200}
          src="/item/fabric-book.png"
          alt="fabric book"
        ></Image>
      </animated.div>
    </div>
  );
}
