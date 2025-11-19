import { useState } from "react";

const HorizontalDropdownList = () => {
  // State to manage the selected values for each dropdown
  const [selectedValues, setSelectedValues] = useState({
    dropdown1: "",
    dropdown2: "",
    dropdown3: "",
  });

  // Handler to update the selected value for a specific dropdown
  const handleChange = (event, dropdownName) => {
    setSelectedValues({
      ...selectedValues,
      [dropdownName]: event.target.value,
    });
  };

  return (
    <div style={styles.container}>
      {/* Dropdown 1 */}
      <div style={styles.dropdownContainer}>
        <select
          style={styles.dropdown}
          value={selectedValues.dropdown1}
          onChange={(e) => handleChange(e, "dropdown1")}
        >
          <option value="" disabled>
            Choose...
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        {/* <p style={styles.selectedText}>
          Selected: {selectedValues.dropdown1 || "None"}
        </p> */}
      </div>

      {/* Dropdown 2 */}
      <div style={styles.dropdownContainer}>
        <select
          style={styles.dropdown}
          value={selectedValues.dropdown2}
          onChange={(e) => handleChange(e, "dropdown2")}
        >
          <option value="" disabled>
            Choose...
          </option>
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
        {/* <p style={styles.selectedText}>
          Selected: {selectedValues.dropdown2 || "None"}
        </p> */}
      </div>

      {/* Dropdown 3 */}
      <div style={styles.dropdownContainer}>
        <select
          style={styles.dropdown}
          value={selectedValues.dropdown3}
          onChange={(e) => handleChange(e, "dropdown3")}
        >
          <option value="" disabled>
            Choose...
          </option>
          <option value="optionX">Option X</option>
          <option value="optionY">Option Y</option>
          <option value="optionZ">Option Z</option>
        </select>
        {/* <p style={styles.selectedText}>
          Selected: {selectedValues.dropdown3 || "None"}
        </p> */}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",

    borderRadius: "8px",
  },
  dropdownContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dropdown: {
    padding: "10px",
    fontSize: "16px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
    outline: "none",
    width: "150px",
  },
  selectedText: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#333",
  },
};

export default HorizontalDropdownList;
