function LossTree() {
  let on_subPersent1 = 25;
  let on_subPersent2 = 50;
  // -----------
  let off_subPersent1 = 5;
  let off_subPersent2 = 3;
  let off_subPersent3 = 7;
  let off_subPersent4 = 2;
  let off_subPersent5 = 8;
  let totalOnPersent = on_subPersent1 + on_subPersent2;
  let totalOffPersent =
    off_subPersent1 +
    off_subPersent2 +
    off_subPersent3 +
    off_subPersent4 +
    off_subPersent5;
  let pos1 = off_subPersent1 + 1;
  let pos2 = pos1 + off_subPersent2 + 1;
  let pos3 = pos2 + off_subPersent3 + 1;
  return (
    <div
      style={{ gridTemplateRows: `${totalOffPersent}% ${totalOnPersent}%` }}
      className="loss_tree_cntr">
      <div className="main_off">
        <span className="name">OFF</span>
        <span className="persent">{totalOffPersent}%</span>
      </div>
      <div className="main_on">
        <span className="name">ON</span>
        <span className="persent">{totalOnPersent}%</span>
      </div>
      {/* -------- */}
      <div className="sub_on_1">
        <span className="title">Quality Loss</span>
        <span
          style={{ height: (on_subPersent1 / totalOnPersent) * 100 + "%" }}
          className="amount">
          <span className="persent">{on_subPersent1}%</span>
        </span>
      </div>
      <div className="sub_on_2">
        <span className="title">Speed Loss</span>
        <span
          style={{ height: (on_subPersent2 / totalOnPersent) * 100 + "%" }}
          className="amount">
          <span className="persent">{on_subPersent2}%</span>
        </span>
      </div>

      <div className="sub_off_1">
        <span className="title">
          Break-
          <br />
          down
        </span>
        <span
          style={{ height: (off_subPersent1 / totalOffPersent) * 100 + "%" }}
          className="amount">
          <span className="persent">{off_subPersent1}%</span>
        </span>
      </div>

      <div className="sub_off_2">
        <span className="title">
          Cleaning <br /> process
        </span>
        <span
          style={{
            height: (off_subPersent2 / totalOffPersent) * 100 + "%",
            top: `${pos1 * 3.5}%`,
          }}
          className="amount">
          <span className="persent">{off_subPersent2}%</span>
        </span>
      </div>

      <div className="sub_off_3">
        <span className="title">
          Change <span style={{ whiteSpace: "nowrap" }}>over time</span>
        </span>
        <span
          style={{
            height: (off_subPersent3 / totalOffPersent) * 100 + "%",
            top: `${pos2 * 3.25}%`,
          }}
          className="amount">
          <span className="persent">{off_subPersent3}%</span>
        </span>
      </div>

      <div className="sub_off_4">
        <span className="title">Idle</span>
        <span
          style={{
            height: (off_subPersent4 / totalOffPersent) * 100 + "%",
            top: `${pos3 * 3.125}%`,
          }}
          className="amount">
          <span className="persent">{off_subPersent4}%</span>
        </span>
      </div>

      <div className="sub_off_5">
        <span className="title">
          Minor
          <br />
          stops
        </span>
        <span
          style={{ height: (off_subPersent5 / totalOffPersent) * 100 + "%" }}
          className="amount">
          <span className="persent">{off_subPersent5}%</span>
        </span>
      </div>
    </div>
  );
}

export default LossTree;
