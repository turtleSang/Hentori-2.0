"use client";
import BtnLogout from "@/components/btn-logout";
import DashboardNavItem from "@/components/dashboard-nav-item";
import {
  faCalendar,
  faDashboard,
  faPercentage,
  faShirt,
} from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const listDashboardItem = [
  {
    link: "",
    name: "Dashboard",
    icon: faDashboard,
  },
  {
    link: "lich-hen",
    name: "Lịch hẹn",
    icon: faCalendar,
  },
  {
    link: "san-pham",
    name: "Sản phẩm",
    icon: faShirt,
  },
  {
    link: "don-hang",
    name: "Đơn hàng",
    icon: faCalendar,
  },
  {
    link: "khuyen-mai",
    name: "Khuyến mãi",
    icon: faPercentage,
  },
];

export default function DashboardNav() {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    let path = window.location.pathname;
    let pathActive = path.split("/")[2];
    if (pathActive) {
      setActiveLink(pathActive);
    }
  }, []);

  return (
    <div className="w-full fixed left-0 bottom-0 lg:static lg:w-2/12">
      <div className="flex flex-row overflow-x-auto bg-colorHighlight text-colorTextBlack rounded-md p-3 lg:h-[100vh] lg:justify-around lg:items-center lg:overflow-hidden lg:flex-col lg:max-h-[100vh]">
        {listDashboardItem.map((val, index) => {
          return (
            <DashboardNavItem
              key={index}
              icon={val.icon}
              link={val.link}
              name={val.name}
              active={val.link === activeLink}
              handleLink={() => setActiveLink(val.link)}
            />
          );
        })}
        <div className="hidden lg:block w-4/5 h-1 bg-colorForeground rounded-xl"></div>
        <BtnLogout />
      </div>
    </div>
  );
}
