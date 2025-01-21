export default function ProducItemSkeleton() {
  return (
    <div className="bg-colorHighlight p-4 rounded-md shadow-lg">
      <div className="w-10/12 h-60 bg-colorForeground mx-auto animate-pulse rounded-md"></div>
      <div className="w-full mt-1 h-4 bg-colorForeground animate-pulse rounded-md"></div>
      <div className="w-3/5 mt-1 h-4 bg-colorForeground animate-pulse rounded-md"></div>
      <div className="w-4/5 mt-1 h-4 bg-colorForeground animate-pulse rounded-md"></div>
    </div>
  );
}
