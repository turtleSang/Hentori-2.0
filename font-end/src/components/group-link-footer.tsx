import { TypeLinkFooter } from "@/libs/defination";

import clsx from "clsx";
import LinkFooter from "./link-footer";

export default function GroupLinkFooter({ info }: { info: TypeLinkFooter }) {
  return (
    <div>
      <h3 className={clsx("text-xl text-colorTextLogo")}>{info.title}</h3>
      <ul>
        {info.listLink.map((val, index) => {
          return <LinkFooter props={val} key={index} />;
        })}
      </ul>
    </div>
  );
}
