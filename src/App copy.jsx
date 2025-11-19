// import { useState, useRef, useEffect } from "react";
// import { Flex, Progress } from "antd";
import "./css/style copy.css";
import Function from "./components/Function";
import RouteChart from "./components/RouteChart";
import LossTree from "./components/LossTree";
import { Tabs } from "antd";
// import { icons } from "antd/es/image/PreviewGroup";

function App() {
  // const [activeIndex, setActiveIndex] = useState(0);
  // const tabRefs = useRef([]);
  // const [indicatorStyle, setIndicatorStyle] = useState({
  //   left: 0,
  //   width: 0,
  // });

  // const handleTabClick = (index) => {
  //   setActiveIndex(index);
  // };

  // useEffect(() => {
  //   const currentTab = tabRefs.current[activeIndex];
  //   setTimeout(() => {
  //     if (currentTab) {
  //       setIndicatorStyle({
  //         left: currentTab.offsetLeft,
  //         width: currentTab.offsetWidth + 2,
  //       });
  //     }
  //   }, 100);
  // }, [activeIndex]);

  // return (
  //   <div className="crnt_actvty_cntr">
  //     <div className="crnt_actvty_cntr-header cntr-header">
  //       <span>
  //         <i className="fa-solid fa-table-cells-large"></i>
  //         <span>Current Activity</span>
  //       </span>
  //       <div className="tab-bar" id="mode-tab-bar">
  //         <div className="indicator mode-indicator" style={indicatorStyle} />
  //         <div
  //           ref={(el) => (tabRefs.current[0] = el)}
  //           onClick={() => handleTabClick(0)}
  //           className={`tab ${activeIndex === 0 ? "active" : ""}`}>
  //           <i className="fa-solid fa-table-cells-large"></i>
  //           <span>function</span>
  //         </div>
  //         <div
  //           ref={(el) => (tabRefs.current[1] = el)}
  //           onClick={() => handleTabClick(1)}
  //           className={`tab ${activeIndex === 1 ? "active" : ""}`}>
  //           <i className="fa-solid fa-table-cells-large"></i>
  //           <span>route</span>
  //         </div>
  //         <div
  //           ref={(el) => (tabRefs.current[2] = el)}
  //           onClick={() => handleTabClick(2)}
  //           className={`tab ${activeIndex === 2 ? "active" : ""}`}>
  //           <i className="fa-solid fa-table-cells-large"></i>
  //           <span>loss tree</span>
  //         </div>
  //       </div>
  //     </div>
  //     {activeIndex === 0 && <Function />}
  //     {activeIndex === 1 && <FacRoute />}
  //     {activeIndex === 2 && <LossTree />}
  //     {/* <div className="crnt_actvty_cntr-body">
  //       {gridItems.map((item, index) => (
  //         <div className="crnt_actvty_cntr-body-item" key={index}>
  //           {item}
  //         </div>
  //       ))}
  //     </div> */}
  //   </div>
  // );
  // ---------------------
  // ---------------------
  let items = [
    {
      key: "1",
      label: (
        <span>
          <i className="current-activity-tab-icon fa-solid fa-table-cells-large"></i>
          <span>Function</span>
        </span>
      ),
      children: <Function />,
    },
    {
      key: "2",
      label: (
        <span>
          <i className="current-activity-tab-icon fa-solid fa-table-cells-large"></i>
          <span>Route</span>
        </span>
      ),
      children: <RouteChart />,
    },
    {
      key: "3",
      label: (
        <span>
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

// ------------------
// {
// const [activeIndex, setActiveIndex] = useState(0);
// const tabRefs = useRef([]);
// const [indicatorStyle, setIndicatorStyle] = useState({
//   left: 0,
//   width: 0,
// });

// // When the RangePicker tab is clicked

// useEffect(() => {
//   const currentTab = tabRefs.current[activeIndex];

//   if (currentTab) {
//     setIndicatorStyle({
//       left: currentTab.offsetLeft,
//       width: currentTab.offsetWidth,
//     });
//   }
// }, [activeIndex]);

//   return (
//     <div className="tab-bar" id="type-tab-bar">
//       <div className="indicator type-indicator" style={indicatorStyle} />
//       {tabs.map((tab, index) => (
//         <div
//           key={index}
//           className={`tab tab-type ${index === activeIndex ? "active" : ""}`}
//           onClick={() => setActiveIndex(index)}
//           ref={(el) => (tabRefs.current[index] = el)}>
//           {tab}
//         </div>
//       ))}
//     </div>
//   );
// }

export default App;
