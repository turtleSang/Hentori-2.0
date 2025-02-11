import { useFormatNumber } from "@/hook/format-hook";
import { FormatNumber } from "@/libs/helper";
import { FormEvent, InputHTMLAttributes, useState } from "react";

export default function InputNumber({
  name,
  lable,
  ...props
}: {
  name: string;
  lable: string;
} & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="text-base md:text-lg " htmlFor={name}>
      <p>{lable}:</p>
      <input
        className="p-1 border-2 w-full border-colorForegrund rounded-md focus-visible:outline-0 focus:border-colorTextLogo duration-200 text-right"
        type="text"
        name={name}
        {...props}
      />
    </label>
  );
}
