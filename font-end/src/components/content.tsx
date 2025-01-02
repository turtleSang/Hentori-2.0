export default function Content({ content }: { content: string }) {
  return (
    <p className="w-3/4 text-center mx-auto md:text-lg lg:text-xl">{content}</p>
  );
}
