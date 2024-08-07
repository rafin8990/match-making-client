
import DashboardNavbar from "@/components/navbar/DashboardNavbar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex relative">
      {/* <div className="fixed h-full w-[280px]"><DashboardSidebar /></div> */}
      <div className="flex-1 ml-[280px]">
        <div>
          <div className="fixed top-0 z-20 h-20 w-full">
            <DashboardNavbar />
          </div>
          <div className="py-7 px-5 mt-28">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
