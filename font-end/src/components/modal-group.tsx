"use client";
import { useState } from "react";
import BtnCreate from "./btn-create";
import clsx from "clsx";
import BtnIcon from "./btn-close";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

enum Action {
  show,
  loading,
  hidden,
}

export default function ModalGroup({
  children,
  nameBtn,
}: {
  children: React.ReactNode;
  nameBtn: string;
}) {
  const [state, setState] = useState<Action>(Action.hidden);
  const handleClickBtn = () => {
    setState(Action.show);
  };

  const handleClose = () => {
    if (state == Action.loading) {
      return;
    }
    setState(Action.loading);
    setTimeout(() => {
      setState(Action.hidden);
    }, 200);
  };

  return (
    <div className="text-right p-3">
      <BtnCreate type="button" onClick={() => handleClickBtn()}>
        {nameBtn}
      </BtnCreate>
      <div
        className={clsx(
          "fixed z-40 top-0 left-0 bg-black w-[100vw] h-[100vh] opacity-35 duration-200",
          state === Action.loading && "opacity-0",
          state === Action.hidden && "hidden"
        )}
        onClick={() => handleClose()}
      ></div>
      <div
        className={clsx(
          "fixed z-50 bg-slate-100 top-1/2 left-1/2 w-2/3 opacity-0 -translate-x-1/2 rounded-md duration-200",
          state === Action.loading && "translate-y-1/2",
          state === Action.show && "-translate-y-1/2 opacity-100",
          state === Action.hidden && ""
        )}
      >
        <div className=" text-right py-3 px-5">
          <BtnIcon icon={faXmark} onClick={() => handleClose()} />
        </div>
        <hr />
        <div className="text-colorTextBlack text-start p-5">{children}</div>
      </div>
    </div>
  );
}
