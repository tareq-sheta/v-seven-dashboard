import { Select } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

// import { useEffect, useState } from "react";

function LineList({ availableLines }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleChangeLine = (value) => {
    //handle change line
    if (value === "All Lines") {
      navigate(`/factory/${factoryName.split(" ").join("-")}`);
    } else {
      navigate(
        `/factory/${factoryName.split(" ").join("-")}/${value
          .split(" ")
          .join("-")}`
      );
    }
  };

  // console.log(myLines);
  let isLineListDisabled = pathname.split("/")[1] !== "factory";
  let lineName;
  let factoryName;
  factoryName = pathname?.split("/")?.[2]?.replace("-", " ") || "All Factories";
  lineName = pathname?.split("/")?.[3]?.replace("-", " ") || "All Lines";
  let myLines;
  console.log(pathname.split("/")[1]);
  if (!isLineListDisabled) {
    myLines = availableLines;
  } else {
    myLines = {
      "All Factories": [""],
    };
    factoryName = "All Factories";
  }
  // if (Object.keys(availableLines).includes(factoryName)) {
  // console.log(lineName);
  // console.log(factoryName);
  // console.log(pathname?.split("/"));
  // console.log(pathname?.split("/")?.[1]);
  // console.log(pathname?.split("/")?.[2]);
  console.log(myLines);
  console.log(factoryName);
  console.log(lineName);
  // console.log(availableLines[factoryName]);
  // console.log(availableLines);
  // console.log(pathname.split("/")[1]);
  // } else {
  // lineName = "All Lines";
  // factoryName = "All Factories";
  // }
  return (
    <Select
      className={`fac-line-cntnr_line ${
        pathname.split("/")[1] !== "factory" ? "contracted" : ""
      }`}
      value={lineName || "All Lines"}
      onChange={handleChangeLine}
      prefix={<i className="icon-cntr fa-solid fa-sliders"></i>}
      options={myLines[factoryName].map((line) => ({
        label: line,
        value: line,
      }))}
      //  options={availableLines[factoryName].map((line) => ({
      //   label: line,
      //   value: line,
      // }))}
      // disabled={pathname === "/dashboard"}
      disabled={isLineListDisabled}
    />
  );
}

export default LineList;
