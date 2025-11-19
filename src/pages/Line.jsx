import { useLocation } from "react-router-dom";

function Line() {
  const { pathname } = useLocation();
  // console.log(pathname);
  return (
    <div>
      <h1>{pathname.split("/")[3]}</h1>
    </div>
  );
}

export default Line;
