import ImageCustomers from "@/components/image-customers";
import CustomerCarousel from "@/layout/customer-carousel";
import { dataCustomer } from "@/libs/constance";
import Link from "next/link";

export default function Page() {
  return (
    <section>
      <CustomerCarousel />
      <Link
        href="/khach-hang"
        className="grid grid-cols-3 md:grid-cols-4 w-full gap-1"
      >
        {dataCustomer.map((val, index) => {
          return <ImageCustomers data={val} key={index} />;
        })}
      </Link>
    </section>
  );
}
