import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";

export default function DashboardNavItem({
  name,
  link,
  icon,
  active,
  handleLink,
}: {
  name: string;
  link: string;
  icon: IconDefinition;
  active: boolean;
  handleLink: () => void;
}) {
  return (
    <div
      className={clsx(
        "  rounded-md duration-200  lg:w-4/5 hover:bg-colorForeground hover:text-colorText hover:scale-110",
        active
          ? "bg-colorForeground text-colorText scale-110"
          : "bg-transparent"
      )}
    >
      <Link
        className="flex flex-col py-1 px-3 justify-center items-center lg:flex-col lg:justify-start lg:pl-3 lg:py-5 xl:flex-row"
        href={`/admin/${link}`}
        onClick={handleLink}
      >
        <FontAwesomeIcon className="text-base xl:mr-5 lg:text-xl" icon={icon} />
        <span className="text-nowrap text-sm  lg:text-lg">{name}</span>
      </Link>
    </div>
  );
}
