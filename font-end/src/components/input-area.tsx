import { TextareaHTMLAttributes } from "react";

export default function InputArea({
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className="resize-none p-1 border-2 border-colorForegrund rounded-md focus-visible:outline-0 focus:border-colorTextLogo duration-200 text-left"
    ></textarea>
  );
}
