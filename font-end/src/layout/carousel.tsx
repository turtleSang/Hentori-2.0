import BackgroundVideos from "@/components/videos-background";
import { LINKCAROUSEL } from "@/libs/constance";
import TitleCarousel from "@/components/title-carousel";
export default function Carousel() {
  return (
    <div className="relative w-full h-[100vh] flex flex-row justify-center">
      <BackgroundVideos urlVideos={LINKCAROUSEL} />
      <TitleCarousel />
    </div>
  );
}
