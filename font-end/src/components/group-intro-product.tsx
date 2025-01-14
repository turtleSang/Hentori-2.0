import { Category } from "@/libs/defination";
import { memo, use } from "react";
import CategroryEle from "./category";

export default memo(function GroupIntroProduct({
  listCategory,
}: {
  listCategory: Promise<Category[]>;
}) {
  const list = use<Category[]>(listCategory);
  return (
    <div className="flex flex-col justify-around items-center md:flex-row">
      {list.map((val) => (
        <CategroryEle category={val} key={val.id} />
      ))}
    </div>
  );
});
