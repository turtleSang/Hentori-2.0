import PromotionSkeleton from "@/components/skeleton/promotion-skeleton";

export default function Loading() {
  const arr = new Array(4).fill(" ");
  return (
    <div className="grid grid-cols-1 pt-24 px-3 gap-3 md:grid-cols-2 ">
      {arr.map((val, index) => {
        return <PromotionSkeleton key={index} />;
      })}
    </div>
  );
}
