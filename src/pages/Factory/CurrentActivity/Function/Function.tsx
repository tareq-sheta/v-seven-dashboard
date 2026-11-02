import React from "react";
import styles from "./Function.module.scss";

const functionData = [
  {
    category: "Assembly",
    colorClass: styles.colorOne,
    items: [
      { text: "Pourtier 2200/2 Low Voltage - Assembly", disabled: false },
      { text: "Pourtier 2600/4 - Assembly - Medium", disabled: false },
      { text: "Assembly 2200 - Assembly/Wire Armoring", disabled: false },
      { text: "Kabmak - Armoring - Steel Tape", disabled: true },
    ],
  },
  {
    category: "Assembly-Armoring",
    colorClass: styles.colorTwo,
    items: [
      { text: "Cortinovis 2600 -Assembly/Wire Armoring", disabled: false },
      { text: "Cortinovis 2600 -Assembly/Wire", disabled: false },
    ],
  },
  {
    category: "Drawing",
    colorClass: styles.colorThree,
    items: [
      { text: "Pourtier 2200/2 Low Voltage - Assembly", disabled: false },
      { text: "Assembly 2200 - Assembly/Wire Armoring", disabled: false },
      { text: "Kabmak - Armoring - Steel Tape", disabled: true },
    ],
  },
  {
    category: "Extrusion",
    colorClass: styles.colorFour,
    items: [
      { text: "Pourtier 2200/2 Low Voltage - Assembly", disabled: false },
      { text: "Assembly 2200 - Assembly/Wire Armoring", disabled: false },
      { text: "Kabmak - Armoring - Steel Tape", disabled: true },
    ],
  },
  {
    category: "Insulation",
    colorClass: styles.colorFive,
    items: [
      { text: "Kabmak - Armoring - Steel Tape", disabled: false },
      { text: "Lead/Steel Tape Armoring", disabled: false },
      { text: "Kabmak New - Armoring", disabled: false },
      { text: "Armoring D - Steel Tape", disabled: false },
      { text: "Kabmak - Armoring - Steel Tape", disabled: true },
      { text: "Kabmak - Armoring - Steel Tape", disabled: true },
    ],
  },
  {
    category: "Insulation-Extrusion",
    colorClass: styles.colorSix,
    items: [
      { text: "Pourtier 2200/2 Low Voltage - Assembly", disabled: false },
      { text: "Pourtier 2600/4 - Assembly - Medium", disabled: false },
      { text: "Assembly 2200 - Assembly/Wire Armoring", disabled: false },
      { text: "Kabmak - Armoring - Steel Tape", disabled: true },
    ],
  },
  {
    category: "Armoring",
    colorClass: styles.colorSeven,
    items: [
      { text: "Kabmak - Armoring - Steel Tape", disabled: false },
      { text: "Armoring D - Steel Tape", disabled: false },
      { text: "Lead/Steel Tape Armoring", disabled: false },
      { text: "Kabmak New - Armoring", disabled: false },
      { text: "Kabmak - Armoring - Steel Tape", disabled: true },
      { text: "Kabmak - Armoring - Steel Tape", disabled: true },
    ],
  },
  {
    category: "Lead",
    colorClass: styles.colorEight,
    items: [
      { text: "Pourtier 2200/2 Low Voltage - Assembly", disabled: false },
      { text: "Assembly 2200 - Assembly/Wire Armoring", disabled: false },
      { text: "Kabmak - Armoring - Steel Tape", disabled: true },
    ],
  },
];

export default function Function() {
  return (
    <div className={styles.parent}>
      {functionData.map((row, idx) => (
        <div key={idx} className={styles.row}>
          <div className={styles.categoryTitle}>{row.category}</div>
          <div className={styles.itemsGrid}>
            {row.items.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className={`${styles.item} ${item.disabled ? styles.itemDisabled : ""}`}>
                <span
                  className={`${styles.icon} ${item.disabled ? styles.colorDisable : row.colorClass}`}></span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
