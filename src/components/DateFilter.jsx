import { useState, useRef, useEffect } from "react";
// import "./css/style copy.css";
// import "./css/style.css";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { DatePicker } from "antd";
const { RangePicker } = DatePicker;
dayjs.extend(customParseFormat);

const weekFormat = "D MMM";
const tabs = [
  "Today",
  "Yesterday",
  "Last Week",
  <i key="date-icon" className="fa-solid fa-calendar-days"></i>,
  // <i key="date-icon" className="fa-regular fa-gear"></i>, // The icon for the last tab
];

const DateFilter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });

  // When the RangePicker tab is clicked
  const onChange = (i) => {
    console.log(i);
  };

  useEffect(() => {
    const currentTab = tabRefs.current[activeIndex];
    // console.log(activeIndex);
    // console.log(currentTab);
    // console.log(currentTab.offsetWidth);
    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
      if (activeIndex === 3) {
        setIndicatorStyle({
          left: currentTab.offsetLeft,
          // width: 250,
          width: 300,
        });
        // setIndicatorStyle({
        //   left: 360,
        //   width: 200,
        // });
      }
    }
  }, [activeIndex]);

  return (
    <div className="tab-bar">
      <div className="indicator" style={indicatorStyle} />
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab ${index === activeIndex ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
          ref={(el) => (tabRefs.current[index] = el)}
        >
          {tab}

          {index === tabs.length - 1 && (
            <RangePicker
              className="date-pkr"
              suffixIcon=""
              onChange={onChange} // Handle onChange for the RangePicker
              defaultValue={[
                dayjs("1 Jan", weekFormat),
                dayjs("10 Jan", weekFormat),
              ]}
              format={weekFormat}
            />
          )}
        </div>
      ))}
    </div>
  );

  // return (
  //   <div className={`tab-bar${activeIndex === 3 ? " tab-bar-shrink" : ""}`}>
  //     {/* <div className={`tab-bar}`}> */}
  //     <div className="indicator" style={indicatorStyle} />
  //     {tabs.map((tab, index) => (
  //       <div
  //         key={index} // Use the index as the key
  //         className={`tab ${index === activeIndex ? "active" : ""}`}
  //         onClick={() => {
  //           setActiveIndex(index); // Update active tab
  //         }}
  //         ref={(el) => {
  //           tabRefs.current[index] = el;
  //         }}
  //       >
  //         {tab}
  //         {/* {activeIndex === 3 && index === 3 && (
  //           <div className="inpt-cnt">
  //             <input type="text" />
  //           </div>
  //         )} */}
  //         {activeIndex === 3 && index === 3 && (
  //           <RangePicker
  //             className="date-pkr"
  //             suffixIcon=""
  //             onChange={onChange} // Handle onChange for the RangePicker
  //             defaultValue={[
  //               dayjs("1 Jan", weekFormat),
  //               dayjs("10 Jan", weekFormat),
  //             ]}
  //             format={weekFormat}
  //           />
  //         )}
  //       </div>
  //     ))}
  //   </div>
  // );
};

export default DateFilter;
