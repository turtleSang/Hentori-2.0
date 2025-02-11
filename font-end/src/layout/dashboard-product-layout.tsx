import BtnCreate from "@/components/btn-create";
import FormCreateProduct from "@/components/form-create-product";
import ModalGroup from "@/components/modal-group";
import TitleDashboard from "@/components/title-dashboard";

export default function DashboardProductLayout() {
  return (
    <div className="pt-5 px-5">
      <TitleDashboard>Quản lý sản phẩm</TitleDashboard>
      <div className="flex flex-row justify-end">
        <ModalGroup nameBtn="tạo sản phẩm">
          <FormCreateProduct />
        </ModalGroup>
        <ModalGroup nameBtn="tạo category">
          <h1>Heloo</h1>
        </ModalGroup>
      </div>
    </div>
  );
}
