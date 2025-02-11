import React, { ButtonHTMLAttributes } from "react";

export default function BtnCreate({
  children,
  ...props
}: {
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="text-colorText bg-colorForeground p-3 capitalize rounded-md duration-200 hover:bg-colorHighlight hover:text-colorTextBlack "
      {...props}
    >
      {children}
    </button>
  );
}
