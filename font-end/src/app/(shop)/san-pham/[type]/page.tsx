import GroupListProduct from "@/components/group-list-product";

export default async function Page({
  params,
}: {
  params: Promise<{ type: string }>;
}) {
  const type = (await params).type;

  return (
    <section>
      <GroupListProduct typeProduct={type} />
    </section>
  );
}
