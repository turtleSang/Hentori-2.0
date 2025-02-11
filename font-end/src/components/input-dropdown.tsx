import { SelectHTMLAttributes } from "react";

export default function InputDropDown({
  name,
  title,
  listDropDown,
  ...props
}: {
  name: string;
  title: string;
  listDropDown: React.ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label htmlFor={name}>
      {title}:{" "}
      <select
        className="p-1 w-2/3 border-2 border-colorForegrund rounded-md focus-visible:outline-0 focus:border-colorTextLogo duration-200 text-center"
        name={name}
        {...props}
      >
        <option value="" defaultChecked>
          Chọn {name}
        </option>
        {listDropDown}
      </select>
    </label>
  );
}
