export default function PromotionSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden">
      <div className="h-80 bg-colorHighlight animate-pulse "></div>
      <div className="bg-slate-100 px-2 py-4">
        <div className="bg-colorTextLogo animate-pulse w-1/2 h-7 mt-1 rounded-lg opacity-35"></div>
        <div className="bg-slate-600 animate-pulse w-1/3 h-5 mt-1 rounded-lg opacity-35"></div>
        <div className="bg-slate-600 animate-pulse w-1/3 h-5 mt-1 rounded-lg  opacity-35"></div>
      </div>
    </div>
  );
}
