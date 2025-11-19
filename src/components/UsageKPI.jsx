// import myImage from './public/image.jpg';
function UsageKPI() {
  return (
    <div className="usage_kpi_cntr">
      <div className="cntr-header">
        <i className="fa-solid fa-table-cells-large"></i>
        <span>Usage KPI</span>
      </div>
      <div className="usage_kpi_cntr_body">
        <div className="cntr-body-item">
          <div className="cntr-body-item_title">
            <i className="card_icon fa-solid fa-table-cells-large"></i>
            <span>energy</span>
          </div>

          <div className="cntr-body-item_per">
            <span>per liter</span>
            <div className="value">
              <span>500</span>
              <span>J</span>
            </div>
          </div>

          <div className="cntr-body-item_per">
            <span>per liter</span>
            <div className="value">
              <span>500</span>
              <span>J</span>
            </div>
          </div>
        </div>
        <div className="cntr-body-item">
          <div className="cntr-body-item_title">
            <i className="card_icon fa-solid fa-table-cells-large"></i>
            <span>water</span>
          </div>

          <div className="cntr-body-item_per">
            <span>per liter</span>
            <div className="value">
              <span>500</span>
              <span>L</span>
            </div>
          </div>

          <div className="cntr-body-item_per">
            <span>per liter</span>
            <div className="value">
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
