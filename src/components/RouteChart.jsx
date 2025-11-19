// import { Flex, Progress, Tooltip } from "antd";
import CustomProgBar from "./CustomProgBar";

function RouteChart() {
  return (
    <>
      <div className="routes_charts_cntr">
        <div className="routes_names_cntr">
          <div className="route_one">Route 1</div>
          <div className="route_two">Route 2</div>
          <div className="route_three">Route 3</div>
          <div className="route_four">Route 4</div>
          <div className="route_five">Route 5</div>
          <div className="route_six">Route 6</div>
          <div className="route_seven">Route 7</div>
          <div className="route_eight">Route 8</div>
        </div>
        <div className="bar_one_cntr">
          <CustomProgBar
            pos={90}
            width={100}
            sections={[10, 30]}
            colors={["#994F90", "#FFA600"]}
          />
        </div>
        <div className="bar_two_cntr">
          <CustomProgBar
            pos={0}
            width={90}
            sections={[10, 10]}
            colors={["#00D3BE", "#FFA600"]}
          />
        </div>
        <div className="bar_three_cntr">
          <CustomProgBar
            pos={30}
            width={450}
            sections={[10, 10, 10]}
            colors={["#26D395", "#FFA600", "#00CCF2"]}
            // colors={["#994F90", "#FFA600"]}
          />
        </div>
        <div className="bar_four_cntr">
          <CustomProgBar
            pos={0}
            width={450}
            sections={[10, 20, 20]}
            colors={["#634F8D", "#A0C73A", "#FFA600"]}
          />
        </div>
        <div className="bar_five_cntr">
          <CustomProgBar
            pos={90}
            width={330}
            sections={[15, 20, 20]}
            colors={["#FB7644", "#00CCF2", "#26D395"]}
          />
        </div>
        <div className="bar_six_cntr">
          <CustomProgBar
            pos={30}
            width={200}
            sections={[5, 20]}
            colors={["#FB7644", "#994F90"]}
          />
        </div>
        <div className="bar_seven_cntr">
          <CustomProgBar
            pos={50}
            width={70}
            sections={[40, 10]}
            colors={["#A0C73A", "#FFA600"]}
          />
        </div>
        <div className="bar_eight_cntr">
          <CustomProgBar
            pos={0}
            width={330}
            sections={[15, 20, 20]}
            colors={["#FB7644", "#00CCF2", "#26D395"]}
          />
        </div>
      </div>
      <div className="chart_timeline">
        <span>Today</span>
        <span>12-00</span>
        <span>12-30</span>
        <span>1-00</span>
        <span>1-30</span>
        <span>2-00</span>
        <span>2-30</span>
        <span>3-00</span>
        <span>3-30</span>
        <span>4-00</span>
        <span>4-30</span>
        <span>5-00</span>
        <span>5-30</span>
      </div>
    </>
  );
}

export default RouteChart;
