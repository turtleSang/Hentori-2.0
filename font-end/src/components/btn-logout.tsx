import { faPowerOff } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BtnLogout() {
  return (
    <button
      className="flex flex-col items-center text-sm text-nowrap lg:text-xl py-1 px-3 rounded-md duration-200 lg:py-5 lg:w-4/5"
      type="button"
    >
      <FontAwesomeIcon
        className="text-base lg:mr-2 lg:text-xl xl:mr-5 "
        icon={faPowerOff}
      />
      Đăng xuất
    </button>
  );
}
