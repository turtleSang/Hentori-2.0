import PromotionCard from "@/components/promotion-card";
import { getPromotion } from "@/hook/fetch-data-server";
import { Promotion } from "@/libs/defination";

export default async function Page() {
  let listPromotion: Promotion[] = await getPromotion();

  return (
    <section className="grid gap-3 grid-cols-1 md:grid-cols-2 pt-24 px-3 pb-3">
      {listPromotion.map((val, index) => {
        return <PromotionCard promotion={val} key={index} />;
      })}
    </section>
  );
}
