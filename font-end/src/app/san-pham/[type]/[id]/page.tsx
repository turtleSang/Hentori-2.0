export default async function Page({
  params,
}: {
  params: Promise<{ type: string; id: string }>;
}) {
  let id = (await params).id;
  return <div>this is product {id}</div>;
}
