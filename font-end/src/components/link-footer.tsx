"use client";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

type LinkInfo = {
  name: string;
  link: string;
  icon?: IconDefinition;
};

export default function LinkFooter({ props }: { props: LinkInfo }) {
  let [active, setActive] = useState<boolean>(false);

  return (
    <li className="ml-10 relative py-2">
      <FontAwesomeIcon icon={props.icon ? props.icon : faChevronRight} />
      <Link
        className={clsx(
          "absolute left-0 bg-colorForeground duration-200",
          active && "translate-x-5"
        )}
        onMouseEnter={() => setActive(true)}
        onMouseOut={() => setActive(false)}
        href={props.link}
      >
        {props.name}
      </Link>
    </li>
  );
}
