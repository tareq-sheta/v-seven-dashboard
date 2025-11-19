import { NavLink } from "react-router-dom";

function SideBar() {
  return (
    <aside className="sidebar">
      <div className="sidebar_first scroll-list">
        <NavLink className="logo-header">
          <img src="/factoryIcon(white).png" alt="Logo" className="logo" />
          mes
        </NavLink>

        <NavLink
          to="dashboard"
          className={({ isActive }) => `main-tab ${isActive ? "active" : ""}`}>
          <i className="fa-regular fa-gear"></i>dashboard
        </NavLink>
        {/* <span> */}
        <div className="droplist">
          <NavLink
            to="resources"
            className={({ isActive }) =>
              `main-tab ${isActive ? "active" : ""}`
            }>
            <i className="fa-regular fa-gear"></i>resources
          </NavLink>
          <div className="branchlist">
            <NavLink
              to="resources/materials"
              tabIndex
              className={({ isActive }) =>
                `branch-tab ${isActive ? "active" : ""}`
              }>
              <span className="icon-dash"></span>materials
            </NavLink>
            <NavLink
              to="resources/energy"
              className={({ isActive }) =>
                `branch-tab ${isActive ? "active" : ""}`
              }>
              <span className="icon-dash"></span>energy
            </NavLink>
            {/* <NavLink
              to="resources/manpower"
              className={({ isActive }) =>
                `branch-tab ${isActive ? "active" : ""}`
              }
            >
              <span className="icon-dash"></span>manpower
            </NavLink> */}
          </div>
        </div>
        {/* </span> */}

        <NavLink
          to="machines"
          className={({ isActive }) => (isActive ? "active" : "")}>
          <i className="fa-regular fa-gear"></i>machines
        </NavLink>
        <NavLink
          to="planning"
          className={({ isActive }) => (isActive ? "active" : "")}>
          <i className="fa-regular fa-gear"></i>planning
        </NavLink>
        <NavLink
          to="reports"
          className={({ isActive }) => (isActive ? "active" : "")}>
          <i className="fa-regular fa-gear"></i>reports
        </NavLink>
      </div>
      <div className="sidebar_last">
        <NavLink
          to="settings"
          className={({ isActive }) => (isActive ? "active" : "")}>
          <i className="fa-regular fa-gear"></i>settings
        </NavLink>
        <NavLink
          to="logout"
          className={({ isActive }) => (isActive ? "active" : "")}>
          <i className="fa-regular fa-gear"></i>logout
        </NavLink>
        <span className="sidebar_logo_bottom">
          <img
            src="/v7-logo(no txt).png"
            alt="Logo"
            //   className=""
          />
        </span>
      </div>
    </aside>
  );
}

export default SideBar;
