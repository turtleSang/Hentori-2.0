import Carousel from "@/layout/carousel";
import Customers from "@/layout/customers";

import IntroProduct from "@/layout/intro-products";
import Introduction from "@/layout/introduction";

export default function Home() {
  return (
    <div>
      <main>
        <Carousel />
        <Introduction />
        <IntroProduct />
        <Customers />
      </main>
    </div>
  );
}
