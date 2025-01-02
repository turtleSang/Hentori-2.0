import Title from "@/components/title";
import clsx from "clsx";
import { garamaod } from "@/app/fonts/font";
import Content from "@/components/content";

export default function CustomerCarousel() {
  const titleName: string = "Khách hàng của chúng tôi";
  const content: string = `Hentori Bespoke phục vụ những quý ông yêu thích sự lịch lãm, 
  tinh tế và đẳng cấp. Khách hàng là những người trân trọng giá trị cá nhân hóa, mong muốn sở hữu trang phục độc bản, 
  vừa vặn hoàn hảo, chất liệu cao cấp, thể hiện phong cách riêng và tôn lên vị thế trong mọi hoàn cảnh.`;
  return (
    <div
      className={clsx(
        `bg-[#3C2A18]  h-[50vh] bg-cover bg-center bg-fixed flex justify-center items-center`,
        garamaod.className
      )}
    >
      <div>
        <Title title={titleName} />
        <Content content={content} />
      </div>
    </div>
  );
}
