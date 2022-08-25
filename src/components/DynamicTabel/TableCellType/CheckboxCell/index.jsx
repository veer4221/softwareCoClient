import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCheckBoxValueAtIndexAction } from "../../../../Redux/Actions";

const CheckboxCell = ({ row, column, rowIndex }) => {
  const dynamicTable = useSelector((state) => state?.dynamicTable);
  const dispatch = useDispatch();
  console.log(row, column, rowIndex);
  useEffect(() => {
    console.log("test123", dynamicTable);
  }, []);
  return (
    <td className="text-center">
      {dynamicTable[column.tableSlug] && (
        <input
          type="checkbox"
          checked={dynamicTable[column.tableSlug].checkbox[rowIndex]}
          onClick={() =>
            dispatch(
              setCheckBoxValueAtIndexAction({
                tableSlug: column.tableSlug,
                fieldIndex: rowIndex,
                value: !dynamicTable[column.tableSlug].checkbox[rowIndex],
              })
            )
          }
        />
      )}
    </td>
  );
};

export default CheckboxCell;
