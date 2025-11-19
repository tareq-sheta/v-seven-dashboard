import { NavLink } from "react-router-dom";

function Button({ icon = "😀", children = "button" }) {
  return (
    <NavLink className="clickable-element">
      <span style={{ marginRight: "5px" }}>{icon}</span>
      {children}
    </NavLink>
  );
}

export default Button;
