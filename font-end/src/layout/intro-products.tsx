import IntroItem from "@/components/category";
import { LISTINTROPRODUCT } from "@/libs/constance";
import Style from "@/app/style.module.css";
import { garamaod } from "@/app/fonts/font";
import clsx from "clsx";
import { Suspense } from "react";
import Content from "@/components/content";
import { getCategory } from "@/hook/fetch-data-server";
import GroupIntroProduct from "@/components/group-intro-product";

export default function IntroProduct() {
  const listCategory = getCategory();
  const title = "SẢN PHẨM CỦA CHÚNG TÔI";
  const content = `Sản phẩm bespoke cao cấp là sự kết hợp hoàn hảo giữa nghệ thuật thủ
          công tinh tế và phong cách cá nhân hóa. Mỗi chi tiết đều được chế tác
          tỉ mỉ, đảm bảo vừa vặn tuyệt đối và thể hiện đẳng cấp riêng biệt. Đây
          chính là lựa chọn hoàn hảo cho những ai trân trọng sự độc đáo và sang
          trọng`;

  return (
    <div className={clsx(Style.backgroundIntroProduct, garamaod.className)}>
      <Content title={title} content={content} />

      <Suspense fallback={<>Loading......</>}>
        <GroupIntroProduct listCategory={listCategory} />
      </Suspense>
    </div>
  );
}
