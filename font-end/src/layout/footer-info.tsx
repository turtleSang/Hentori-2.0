import IntroFooter from "@/components/IntroFooter";
import Address from "@/components/adress-footer";
import GroupLinkFooter from "@/components/group-link-footer";
import { ListLinkFooter } from "@/libs/constance";

export default function FooterInfo() {
  return (
    <footer className="px-8 py-12 bg-colorForeground grid grid-flow-row grid-cols-1 md:grid-flow-col md:grid-cols-3">
      <IntroFooter />
      {ListLinkFooter.map((val, index) => {
        return <GroupLinkFooter info={val} key={index} />;
      })}
    </footer>
  );
}
