import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { stencil, garamaod } from "@/app/fonts/font";
import clsx from "clsx";
export default function IntroFooter() {
  return (
    <div className="flex flex-col justify-center items-center md:row-span-2">
      <Image src="/logo/icon.png" width={100} height={100} alt="Hentori Logo" />
      <h1 className={clsx(stencil.className, "text-colorTextLogo text-2xl")}>
        Hentori Besopoke
      </h1>
      <p
        className={clsx(
          "w-4/5 text-base text-balance text-justify",
          garamaod.className
        )}
      >
        "Hentori Bespoke tôn vinh sự tinh xảo và cá nhân hóa, mang đến phong
        cách đẳng cấp và sang trọng cho quý khách"
      </p>
    </div>
  );
}
