// import myImage from './public/image.jpg';
import { Droplet, Zap } from "lucide-react";
import styles from "./UsageKPI.module.scss";
function UsageKPI() {
  return (
    <div className={styles.usageKpiCntr}>
      <div className={styles.cntrHeader}>
        <i className="fa-solid fa-table-cells-large"></i>
        <span>Usage KPI</span>
      </div>
      <div className={styles.usageKpiCntrBody}>
        <div className={styles.cntrBodyItem}>
          <div className={styles.cntrBodyItem_title}>
            {/* <i className="card_icon fa-solid fa-table-cells-large"></i> */}
            <Zap className={styles.cardIcon} />
            <span>energy</span>
          </div>

          <div className={styles.cntrBodyItem_per}>
            <span>per liter</span>
            <div className={styles.value}>
              <span>500</span>
              <span>J</span>
            </div>
          </div>

          <div className={styles.cntrBodyItem_per}>
            <span>per liter</span>
            <div className={styles.value}>
              <span>500</span>
              <span>J</span>
            </div>
          </div>
        </div>
        <div className={styles.cntrBodyItem}>
          <div className={styles.cntrBodyItem_title}>
            {/* <i className="card_icon fa-solid fa-table-cells-large"></i> */}
            <Droplet className={styles.cardIcon} />
            <span>water</span>
          </div>

          <div className={styles.cntrBodyItem_per}>
            <span>per liter</span>
            <div className={styles.value}>
              <span>500</span>
              <span>L</span>
            </div>
          </div>

          <div className={styles.cntrBodyItem_per}>
            <span>per liter</span>
            <div className={styles.value}>
              <span>500</span>
              <span>L</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsageKPI;
