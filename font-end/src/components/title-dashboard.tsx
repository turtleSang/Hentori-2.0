import { HTMLAttributes } from "react";

export default function TitleDashboard({
  children,
  ...props
}: { children: React.ReactNode } & HTMLAttributes<HTMLHeadingElement>) {
  return <h2 className="text-3xl uppercase">{children}</h2>;
}
