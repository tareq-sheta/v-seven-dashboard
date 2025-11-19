import TotalProduction from "../components/TotalProduction";
import PerformanceIndicatorKPI from "../components/PerformanceIndicatorKPI";
import UsageKPI from "../components/UsageKPI";
import CurrentActivity from "../components/CurrentActivity";
import FactoryCharts from "../components/FactoryCharts";
function Factory() {
  return (
    <div className="one-factory-cntr scroll-list">
      <div className="div1">
        <TotalProduction />
      </div>
      <div className="div2">
        <PerformanceIndicatorKPI />
      </div>
      <div className="div3">
        <UsageKPI />
      </div>
      <div className="div4">
        <FactoryCharts />
      </div>
      <div className="div5">
        <CurrentActivity />
      </div>
    </div>
  );
}

export default Factory;
