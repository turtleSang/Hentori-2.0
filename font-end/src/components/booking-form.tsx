"use client";
import { isValidPhoneNumber } from "@/libs/helper";
import clsx from "clsx";
import { ChangeEvent, FormEvent, useState } from "react";

// Datepicker
import DatePicker from "react-datepicker";
import { vi } from "date-fns/locale/vi";
import "react-datepicker/dist/react-datepicker.css";
// Font Awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay } from "@fortawesome/free-solid-svg-icons";

export function BookingForm({ id }: { id: number }) {
  const [datePick, setDatePick] = useState<Date>(new Date());
  const [bookingInfo, setBookingInfo] = useState<any>({
    idProduct: id,
    date: datePick,
  });
  const [arletPhone, setArletPhone] = useState<string | undefined>(undefined);

  let idTimeout: any;

  const handleChange = (e: any) => {
    if (idTimeout) {
      return;
    }
    idTimeout = setTimeout(() => {
      let name = e.target.name;
      let value = e.target.value;
      if (isValidPhoneNumber(value)) {
        setArletPhone("");
        setBookingInfo(() => {
          return { ...bookingInfo, [name]: value };
        });
        return;
      }
      setArletPhone("SĐT không hợp lệ");
      idTimeout = undefined;
    }, 700);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(bookingInfo);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="flex justify-around items-center flex-col lg:flex-row lg:items-baseline ">
        <label className="" htmlFor="phoneNumber">
          <p>Số điện thoại</p>
          <span
            className={clsx(
              arletPhone
                ? "bg-red-400 rounded-md block w-auto p-2 my-2"
                : "hidden"
            )}
          >
            {arletPhone}
          </span>
          <input
            placeholder="0943..."
            className="block p-2 bg-transparent text-base border-2 border-colorHighlight focus:border-colorBorder focus-visible:outline-none  rounded-md"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            onChange={(e: ChangeEvent) => {
              handleChange(e);
            }}
          />
        </label>
        <div>
          <p>Ngày hẹn:</p>
          <DatePicker
            className="w-auto p-2 rounded-md mb-2 border-2 border-colorHighlight focus:border-colorBorder focus-visible:outline-none "
            selected={datePick}
            locale={vi}
            dateFormat={"dd/MM/yyy"}
            minDate={datePick}
            onChange={(datePick: Date | null) => {
              let date: Date = datePick as Date;
              if (date) {
                setDatePick(date);
              }
            }}
          />
        </div>
      </div>

      <div className="flex justify-around">
        <button
          className="inline-block w-2/5 border-2 border-colorForeground bg-colorForeground text-colorHighlight py-3 rounded-sm hover:bg-colorTextLogo hover:text-colorTextBlack hover:border-colorTextLogo duration-200"
          type="submit"
        >
          Đặt lịch may
        </button>
      </div>
    </form>
  );
}
