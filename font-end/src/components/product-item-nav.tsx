import clsx from "clsx";
import Link from "next/link";

export default function ProductItemNav({
  linkImg,
  name,
  link,
  handleClick,
  active,
}: {
  linkImg: string;
  name: string;
  link: string;
  handleClick: () => void;
  active?: boolean;
}) {
  return (
    <Link
      className={clsx(
        "relative inline-block w-48 h-48 overflow-hidden ml-4 mr-4 rounded-md duration-200",
        active && "border-2 border-colorTextLogo shadow-xl"
      )}
      onClick={handleClick}
      href={link}
    >
      <img className="block w-full" src={linkImg} alt={name} />
      <h3 className="absolute py-1 bottom-2 left-1/2 -translate-x-1/2 z-10 text-center w-4/5 font-medium">
        {name}
      </h3>
    </Link>
  );
}
