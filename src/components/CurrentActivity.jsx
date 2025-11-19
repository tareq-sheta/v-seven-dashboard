import Function from "./Function";
import LossTree from "./LossTree";
import RouteChart from "./RouteChart";
import { Tabs } from "antd";
import { useEffect } from "react";
function CurrentActivity() {
  useEffect(() => {
    const tabsContainer = document.querySelector(
      ".current-activity-tabs .ant-tabs-nav-wrap"
    );
    const existingTitle = tabsContainer.querySelector(
      ".current-activity-title"
    );
    if (existingTitle) return;
    tabsContainer.insertAdjacentHTML(
      "afterbegin",
      `<span class="current-activity-title"><i class="current-activity-tab-icon fa-solid fa-table-cells-large"></i> Current Activity</span>`
    );
    console.log(tabsContainer);
    console.log("headTitle");
  }, []);
  let items = [
    {
      key: "1",
      label: (
        <span className="tab-color">
          <i className="current-activity-tab-icon fa-solid fa-table-cells-large"></i>
          <span>Function</span>
        </span>
      ),
      children: <Function />,
    },
    {
      key: "2",
      label: (
        <span className="tab-color">
          <i className="current-activity-tab-icon fa-solid fa-table-cells-large"></i>
          <span>Route</span>
        </span>
      ),
      children: <RouteChart />,
    },
    {
      key: "3",
      label: (
        <span className="tab-color">
          <i className="current-activity-tab-icon fa-solid fa-table-cells-large"></i>
          <span>Loss Tree</span>
        </span>
      ),
      children: <LossTree />,
    },
  ];
  return (
    <Tabs
      defaultActiveKey="1"
      className="current-activity-tabs"
      items={items.map((item, i) => {
        const id = String(i + 1);
        return {
          key: id,
          label: item.label,
          children: item.children,
        };
      })}
    />
  );
}

export default CurrentActivity;
