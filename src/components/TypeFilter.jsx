import { useState, useRef, useEffect } from "react";

const tabs = ["SKU", "Production"];

const TypeFilter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });

  // When the RangePicker tab is clicked

  useEffect(() => {
    const currentTab = tabRefs.current[activeIndex];

    if (currentTab) {
      setIndicatorStyle({
        left: currentTab.offsetLeft,
        width: currentTab.offsetWidth,
      });
    }
  }, [activeIndex]);

  return (
    <div className="tab-bar" id="type-tab-bar">
      <div className="indicator type-indicator" style={indicatorStyle} />
      {tabs.map((tab, index) => (
        <div
          key={index}
          className={`tab tab-type ${index === activeIndex ? "active" : ""}`}
          onClick={() => setActiveIndex(index)}
          ref={(el) => (tabRefs.current[index] = el)}
        >
          {tab}
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

export default TypeFilter;
