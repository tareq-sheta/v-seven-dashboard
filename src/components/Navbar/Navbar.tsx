import DateFilter from "../DateFilter/DateFilter";
import FactoriesAndLinesList from "../FactoriesAndLinesList/FactoriesAndLinesList";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.navbar_left}>
        <FactoriesAndLinesList />
      </div>
      <div className={styles.navbar_right}>
        <DateFilter />
      </div>
    </header>
  );
}

export default Navbar;
