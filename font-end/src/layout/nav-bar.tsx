"use client";

import Logo from "@/components/logo";
import NavMenu from "@/components/nav-menu";
import useScrollY from "@/hook/scroll-hook";
import clsx from "clsx";
import { useEffect, useState } from "react";

export default function NavBar() {
  let y = useScrollY();
  let [active, setActive] = useState<boolean>(true);
  let [preScroll, setPreScroll] = useState<number>(0);

  useEffect(() => {
    setActive(preScroll >= y);
    setPreScroll(y);
  }, [y]);

  return (
    <nav
      className={clsx(
        "w-full fixed z-50 md:flex md:flex-row md:justify-between md:items-center duration-200",
        preScroll === 0 ? "bg-transparent" : "bg-colorForeground",
        !active && "-translate-y-full"
      )}
    >
      <Logo />
      <NavMenu />
    </nav>
  );
}
