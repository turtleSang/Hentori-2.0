import CustomersImgSkeleton from "@/components/skeleton/customers-img-skeleton";
import { CustomerImgFake } from "@/hook/fetch-data-server";
import Carousel from "@/layout/carousel";
import Customers from "@/layout/customers";

import IntroProduct from "@/layout/intro-products";
import Introduction from "@/layout/introduction";
import { Suspense } from "react";

export default function Home() {
  const dataImg = CustomerImgFake();
  return (
    <div>
      <main>
        <Carousel />
        <Introduction />
        <IntroProduct />
        <Suspense fallback={<CustomersImgSkeleton />}>
          <Customers dataCustomer={dataImg} />
        </Suspense>
      </main>
    </div>
  );
}
