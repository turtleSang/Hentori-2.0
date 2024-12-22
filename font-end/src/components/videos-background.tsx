export default function BackgroundVideos({ urlVideos }: { urlVideos: string }) {
  return (
    <video
      loop
      autoPlay
      muted
      className="absolute bottom-0 left-0 w-full h-full object-cover -z-20"
    >
      <source src={urlVideos} type="video/mp4"></source>
    </video>
  );
}
