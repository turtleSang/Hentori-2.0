import { InputHTMLAttributes } from "react";

export default function InputTxt({
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
        className="p-1 border-2 border-colorForegrund rounded-md focus-visible:outline-0 focus:border-colorTextLogo duration-200 w-full"
        type="text"
        name={name}
        {...props}
      />
    </label>
  );
}
