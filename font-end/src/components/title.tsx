export default function Title({ title }: { title: string }) {
  return (
    <h1 className="text-center text-colorTextLogo capitalize text-3xl md:text-4xl">
      {title}
    </h1>
  );
}
