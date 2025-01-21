export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main style={{ padding: "20px" }}>{children}</main>
    </>
  );
}
