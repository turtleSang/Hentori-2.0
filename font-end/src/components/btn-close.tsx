import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { HTMLAttributes } from "react";

export default function BtnIcon({
  icon,
  ...props
}: { icon: IconDefinition } & HTMLAttributes<HTMLButtonElement>) {
  return (
    <button className="text-slate-500 " type="button" {...props}>
      <FontAwesomeIcon className="text-2xl" icon={icon} />
    </button>
  );
}
