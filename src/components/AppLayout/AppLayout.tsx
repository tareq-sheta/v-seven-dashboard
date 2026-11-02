import { Outlet } from "react-router-dom";
import Header from "../Navbar/Navbar";
import MainContent from "../MainContent/MainContent";
import SideBar from "../Sidebar/SideBar";
import styles from "./AppLayout.module.scss";

function AppLayout() {
  return (
    <div className={styles.appLayout}>
      <Header />
      <SideBar />
      <MainContent>
        <Outlet />
      </MainContent>
    </div>
  );
}

export default AppLayout;
