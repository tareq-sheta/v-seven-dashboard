import { useParams } from "react-router-dom";
import TypeFilter from "./TypeFilter";

function Main({ children }) {
  const { id } = useParams();
  // console.log("id", id);
  return (
    <div className="maincontent">
      <div className="dashboard-head">
        <p className="dashboard-header">Dashboard / {"Production"}</p>

        {/* <div className="typefilter">filter</div> */}
        {id === "dashboard" && <TypeFilter />}
      </div>
      {children}
    </div>
  );
}

export default Main;
