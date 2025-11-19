import { Select } from "antd";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function FactoryList({ availableFactories }) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const handleChangeFactory = (value) => {
    console.log(value);
    if (value === "All Factories") {
      navigate(`/dashboard`);
    } else {
      navigate(`/factory/${value.split(" ").join("-")}`);
    }
  };
  return (
    <Select
      // onMouseLeave={() => console.log("123")}
      // onChange={onchange}
      // ref={selectRef} // Attach the ref to the Select component
      className="fac-line-cntnr_fac"
      // defaultValue={availableFactories[0]}
      value={
        pathname.split("/")[1] === "factory"
          ? pathname.split("/")[2]
          : "All Factories"
      }
      // onClick={() => setIsModalOpen((val) => !val)}
      prefix={<i className="fa-regular fa-gear"></i>}
      options={availableFactories.map((province) => ({
        label: province,
        value: province,
      }))}
      onChange={handleChangeFactory}
    />
  );
}

export default FactoryList;
