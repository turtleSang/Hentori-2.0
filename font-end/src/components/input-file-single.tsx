import { InputHTMLAttributes, useRef } from "react";

export default function InputFileSingle({
  name,
  title,
  ...props
}: { name: string; title: string } & InputHTMLAttributes<HTMLInputElement>) {
  const inputEle = useRef<HTMLInputElement>(null);

  const handleClickUpload = () => {
    inputEle.current?.click();
  };

  return (
    <label htmlFor={name}>
      {title}
      <input
        className="hidden"
        type="file"
        alt="file upload"
        name={name}
        id={name}
        {...props}
        accept={"image/png, image/jpeg"}
        ref={inputEle}
      />
      <button
        className="border-2 border-colorBorder ml-2 px-3 py-1 rounded-md hover:bg-colorBorder duration-200 font-semibold"
        type="button"
        onClick={handleClickUpload}
      >
        upload
      </button>
    </label>
  );
}
