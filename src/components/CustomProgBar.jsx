const CustomProgBar = ({
  width = 500,
  pos = 0,
  sections = [10, 20, 30],
  colors = ["#003f5c", "#58508d", "#bc5090"],
}) => {
  const sum = [...sections].reduce((a, b) => a + b, 0);
  const percent1 = (sections[0] / sum) * width;
  const percent2 = (sections[1] / sum) * width;
  const percent3 = (sections[2] / sum) * width;
  let appliedPos = pos;
  if (appliedPos > 100) {
    appliedPos = 100;
  }
  // if (appliedPos > 50) {
  //   appliedPos = 100;
  // }
  // const strokeColor = {
  //   "0%": "#003f5c", // First segment (dark blue)
  //   [`${percent1 - 1}%`]: "#003f5c", // Slightly before the end of segment 1
  //   [`${percent1}%`]: "#ffffff", // White border (1% wide)
  //   [`${percent1 + 1}%`]: "#58508d", // Start of segment 2 (purple)
  //   [`${percent2 - 1}%`]: "#58508d", // Slightly before the end of segment 2
  //   [`${percent2}%`]: "#ffffff", // White border (1% wide)
  //   [`${percent2 + 1}%`]: "#bc5090", // Start of segment 3 (pink)
  //   "100%": "#bc5090", // End of segment 3
  // };

  return (
    <div
      className="custom-progress"
      style={{
        width: `${width}px`,
        left: `calc(${appliedPos}% - ${appliedPos > 50 ? width : 0}px)`,
      }}>
      <span
        style={{ backgroundColor: colors[0], width: `${percent1}px` }}></span>
      <span
        style={{ backgroundColor: colors[1], width: `${percent2}px` }}></span>
      <span
        style={{ backgroundColor: colors[2], width: `${percent3}px` }}></span>
    </div>
  );
};

export default CustomProgBar;
