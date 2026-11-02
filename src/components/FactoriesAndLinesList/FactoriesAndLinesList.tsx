import FactoryList from "./FactoryList/FactoryList";
import LineList from "./LinesList/LineList";
import styles from "./FactoriesAndLinesList.module.scss";

const allLines = {
  "All Factories": [""],
  "Factory Name1": ["All Lines", "Line 1", "Line 2", "Line 3"],
  "Factory Name2": ["All Lines", "Line 11", "Line 22", "Line 33"],
};

const factoriesNames = ["All Factories", "Factory Name1", "Factory Name2"];

function FactoriesAndLinesList() {
  return (
    <div className={styles.container}>
      <FactoryList availableFactories={factoriesNames} />
      <LineList availableLines={allLines} />
    </div>
  );
}

export default FactoriesAndLinesList;
