// import FactoriesList from "./FactoriesList";

import Button from "./Button";
import DateFilter from "./DateFilter";
import FactoriesAndLinesList from "./FactoriesAndLinesList";
import FactoriesList from "./FactoriesAndLinesList";
import HorizontalDropdownList from "./Testhr";

// import FactoriesList from "./FactoriesList";
// import FactoriesList from "./FactoriesList";

// {
//   label: "2nd menu item",
//   key: "2",
//   icon: <UserOutlined />,
// },
// {
//   label: "3rd menu item",
//   key: "3",
//   icon: <UserOutlined />,
//   danger: true,
// },
// {
//   label: "4rd menu item",
//   key: "4",
//   icon: <UserOutlined />,
//   danger: true,
//   disabled: true,
// },

function Header() {
  return (
    <header className="header">
      <div className="header_left">
        <FactoriesAndLinesList />
      </div>
      <div className="header_right">
        <DateFilter />
      </div>
    </header>
  );
}

export default Header;
