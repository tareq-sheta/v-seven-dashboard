import { Outlet } from "react-router-dom";
import Header from "./Header";
import Main from "./Main";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="applayout">
      <Header />
      <SideBar />
      <Main>
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
