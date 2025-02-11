import DashboardNav from "@/layout/dashboard-nav";

export default function LayoutDashBoard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:flex lg:flex-row">
      <DashboardNav />
      <div className="w-full pl-1 max-h-[100vh] overflow-y-auto lg:w-10/12">
        <div className="">{children}</div>
      </div>
    </div>
  );
}
