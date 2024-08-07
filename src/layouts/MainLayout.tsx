
import DefaultFooter from "@/components/footer/DefaultFooter";
import DefaultNavbar from "@/components/navbar/DefaultNavbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="publicBackground">
      <div>
        <div className="match-commonContainer">
          <DefaultNavbar/>
          <Outlet />
        </div>
        <DefaultFooter />
      </div>
    </div>
  );
};

export default MainLayout;
