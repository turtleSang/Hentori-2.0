import { FormatNumber, FormatNumberToNumber } from "@/libs/helper";
import { useState } from "react";

export const useFormatNumber = () => {
  const [valNumber, setNumber] = useState<number>(0);
  let formatNumber = FormatNumber(valNumber);

  const handleFormat = (txtVal: any) => {
    if (!txtVal) {
      setNumber(0);
    }
    txtVal = FormatNumberToNumber(txtVal);
    let num = Number(txtVal);
    if (num) {
      setNumber(num);
    } else {
      return;
    }
  };

  return { formatNumber, valNumber, handleFormat };
};
