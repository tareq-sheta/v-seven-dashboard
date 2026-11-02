import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.scss";
import {
  LayoutGrid,
  LogOut,
  Settings,
  TriangleAlert,
  Warehouse,
  Wrench,
} from "lucide-react";

function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <div className={`${styles.sidebar_first} ${styles.scrollList}`}>
        <NavLink to="dashboard" className={styles.logoHeader || ""}>
          <img
            src="/factoryIcon(white).png"
            alt="Logo"
            className={styles.logo}
          />
          <span>mes</span>
        </NavLink>

        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            `${styles.mainTab} ${isActive ? styles.active : ""}`
          }
        >
          <LayoutGrid />
          dashboard
        </NavLink>

        <div className={styles.dropList}>
          <NavLink
            to="resources"
            className={({ isActive }) =>
              `${styles.mainTab} ${isActive ? styles.active : ""}`
            }
          >
            <Warehouse />
            resources
          </NavLink>
          <div className={styles.branchList}>
            <NavLink
              to="resources/materials"
              tabIndex={0}
              className={({ isActive }) =>
                `${styles.branchTab} ${isActive ? styles.active : ""}`
              }
            >
              <span className={styles.iconDash}></span>
              materials
            </NavLink>
            <NavLink
              to="resources/energy"
              tabIndex={-1}
              className={({ isActive }) =>
                `${styles.branchTab} ${isActive ? styles.active : ""}`
              }
            >
              <span className={styles.iconDash}></span>energy
            </NavLink>
          </div>
        </div>

        <NavLink
          to="machines"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <Wrench />
          machines
        </NavLink>

        <NavLink
          to="reports"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <TriangleAlert />
          reports
        </NavLink>
      </div>
      <div className={styles.sidebar_last}>
        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <Settings />
          settings
        </NavLink>
        <NavLink
          to="/login"
          onClick={() => localStorage.removeItem("currentUser")}
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          <LogOut />
          logout
        </NavLink>
        <span className={styles.sidebarLogoBottom}>
          <img src="/v7-logo(no txt).png" alt="Logo" />
        </span>
      </div>
    </aside>
  );
}

export default SideBar;
