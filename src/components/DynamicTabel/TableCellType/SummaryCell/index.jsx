import React, { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
const SummaryCell = ({ row, column }) => {
  const [maxLength, setMaxLength] = useState(100);
  return (
    <td>
      {console.log("maxLength", maxLength)}
      {maxLength && row[`${column?.property}`].length > maxLength
        ? row[`${column?.property}`].slice(0, maxLength) + "..."
        : row[`${column?.property}`].length > maxLength
        ? row[`${column?.property}`].slice(0, maxLength) + "..."
        : row[`${column?.property}`]}
      {100 <= row[`${column?.property}`].length && (
        <span
          style={{ cursor: "pointer", color: "#28e05cb0" }}
          onClick={() =>
            setMaxLength(
              maxLength == 100 ? row[`${column?.property}`].length : 100
            )
          }
        >
          {maxLength == 100 ? (
            <>
              See More
              <MdExpandMore />
            </>
          ) : (
            <>
              &nbsp;Show Less
              <MdExpandLess />
            </>
          )}
        </span>
      )}
    </td>
  );
};

export default SummaryCell;
