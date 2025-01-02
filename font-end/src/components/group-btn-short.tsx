import { garamaod } from "@/app/fonts/font";

import { GroupShort } from "@/libs/constance";
import { TypeSort } from "@/libs/defination";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

export default function GroupBtnShort({
  typeSort,
  handleSort,
}: {
  typeSort: TypeSort;
  handleSort: (typeSort: TypeSort) => void;
}) {
  return (
    <div
      className={clsx(
        "text-nowrap text-end text-lg py-4 overflow-x-auto md:w-3/4 md:mx-auto",
        garamaod.className
      )}
    >
      {GroupShort.map((val, index) => {
        return (
          <button
            className={clsx(
              "mr-3 border-2 p-3 rounded-sm duration-200",
              typeSort === val.type &&
                "border-colorTextLogo text-colorTextBlack bg-colorHighlight scale-105"
            )}
            onClick={() => handleSort(val.type)}
            type="button"
            key={index}
          >
            {val.name}
            <FontAwesomeIcon className="ml-1" icon={val.icon} />
          </button>
        );
      })}
    </div>
  );
}
