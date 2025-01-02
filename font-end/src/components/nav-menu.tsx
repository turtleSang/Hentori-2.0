"use client";
import Link from "next/link";
import { LISTLINK, LISTSOCIAL } from "@/libs/constance";

import clsx from "clsx";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavMenu() {
  let [activeNav, setActiveNav] = useState<boolean>(false);
  let [activeLink, setActiveLink] = useState<string>("/");

  function handleActiveNav() {
    setActiveNav(!activeNav);
  }

  function handleActiveLink(link: string) {
    setActiveLink(link);
  }

  useEffect(() => {
    let path: string = window.location.pathname;
    let newPath = "/" + path.split("/")[1];

    setActiveLink(newPath ? newPath : "/");
  }, []);

  return (
    <div className={clsx("w-2/3")}>
      <div
        className="absolute right-8 top-5 flex flex-col justify-around h-8 w-8 cursor-pointer z-[100] md:hidden  "
        onClick={handleActiveNav}
      >
        <span
          className={clsx(
            "block h-[2px] w-8  duration-200 ",
            activeNav
              ? "rotate-45 translate-y-3 w-9 bg-colorTextGreen"
              : "bg-colorTextLogo"
          )}
        ></span>
        <span
          className={clsx(
            "block h-[2px] w-8 bg-colorTextLogo duration-200  ",
            activeNav && "opacity-0"
          )}
        ></span>
        <span
          className={clsx(
            "block h-[2px] w-8 duration-200 ",
            activeNav
              ? "-rotate-45 -translate-y-2 w-9 bg-colorTextGreen"
              : "bg-colorTextLogo"
          )}
        ></span>
      </div>

      <div
        className={clsx(
          "flex flex-col fixed items-center justify-around top-0 right-0 w-3/4 h-[100vh] bg-colorHighlight z-[99] pb-3 rounded-l-lg duration-200 shadow-sm ",
          activeNav ? "translate-x-0" : "translate-x-full",
          "md:static md:bg-transparent md:flex-row md:w-full md:translate-x-0 md:h-5 md:pb-0 md:shadow-none"
        )}
        onClick={() => setActiveNav(false)}
      >
        {LISTLINK.map((val, index) => {
          return (
            <Link
              replace={true}
              href={val.link}
              key={index}
              className={clsx(
                "duration-200 text-xl mt-12 leading-[48px] h-12 block w-8/12 text-start hover:text-colorBorder",
                "md:mt-0 md:text-center md:w-full md:text-nowrap md:text-sm md:mr-3 md:h-6 lg:text-lg",
                " md:after:content-[''] md:after:block md:after:bg-colorTextLogo md:after:h-1 md:after:rounded-md md:after:duration-200 md:hover:after:w-full",
                val.link === activeLink
                  ? "text-colorBorder md:after:w-full"
                  : "text-colorTextGreen md:text-colorText md:after:w-0"
              )}
              onClick={() => {
                handleActiveLink(val.link);
              }}
            >
              {val.name}
            </Link>
          );
        })}

        {LISTSOCIAL.map((val, index) => {
          return (
            <Link
              key={index}
              href={val.link}
              className="duration-200 text-colorTextGreen text-xl mt-12 leading-[48px] h-12 block w-8/12 text-start md:text-colorText md:mt-0 hover:text-colorBorder"
              target="_blank"
            >
              <FontAwesomeIcon icon={val.icon} size="1x" />
              <span className="ml-3 md:hidden">{val.type}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
