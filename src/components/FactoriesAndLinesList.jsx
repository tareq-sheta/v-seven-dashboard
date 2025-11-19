import { useState } from "react";
import { Space } from "antd";
import FactoryList from "./FactoryList";
import LineList from "./LineList";

const allLines = {
  "All Factories": [""],
  "Factory Name1": ["All Lines", "Line 1", "Line 2", "Line 3"],
  "Factory Name2": ["All Lines", "Line 11", "Line 22", "Line 33"],
};

const factoriesNames = ["All Factories", "Factory Name1", "Factory Name2"];

function FactoriesAndLinesList() {
  // const [availableLines, setAvailableLines] = useState(
  //   allLines[factoriesNames[0]]
  // );

  return (
    <Space className="fac-line-cntnr" wrap>
      <FactoryList availableFactories={factoriesNames} />
      <LineList
        availableLines={allLines}
        // availableFactories={factoriesNames}
        // line={currentLine}
        // onchange={setCurrentLine}
      />
    </Space>
  );
}

export default FactoriesAndLinesList;
