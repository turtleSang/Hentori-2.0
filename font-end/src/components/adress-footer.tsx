import clsx from "clsx";
import Link from "next/link";

export default function Address() {
  return (
    <div className="col-span-2">
      <h3 className={clsx("text-xl text-colorTextLogo")}>Địa chỉ</h3>
      <Link
        className="block ml-10"
        href="https://maps.app.goo.gl/TMRQQyJzskKeZLkw7"
      >
        39 đường Hoàng Văn Thụ, phường Chánh Nghĩa, thành phố Thủ Dầu Một tỉnh
        Bình Dương
      </Link>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.8317694137054!2d106.66248137451956!3d10.976067655480627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d1c641dc3929%3A0x4ada34bee13560b6!2sHentori%20Bespoke%20x%20The%20Kingsman!5e0!3m2!1svi!2s!4v1734542809775!5m2!1svi!2s"
        className="block w-full h-52 rounded-2xl ml-10"
        loading="lazy"
      ></iframe>
    </div>
  );
}
