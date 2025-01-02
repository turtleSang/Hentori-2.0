import ProducItemSkeleton from "./product-item-skeleton";

export default function GroupProductItemSkeleton() {
  let listSkeleton = Array(6).fill(null);

  return (
    <div className="grid grid-flow-row grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 px-7 pb-4">
      {listSkeleton.map((_, index) => (
        <ProducItemSkeleton key={index} />
      ))}
    </div>
  );
}
