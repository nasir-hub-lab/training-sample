import React from "react";

function SortedList({ sorted, handleChange }) {
  return (
    <>
      <select value={sorted} onChange={handleChange}>
        <option value="normal">Normal-Order</option>
        <option value="alphabatically">Alphabetical-Order</option>
        <option value="reverse">Reverse-Order</option>
      </select>
    </>
  );
}

export default SortedList;