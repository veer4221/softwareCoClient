import React, { useEffect, useState } from "react";
import TableCellType from "./TableCellType";
import { useDispatch } from "react-redux";
import { setCheckBoxDefaultValueAction } from "../../Redux/Actions";

const DynamicTable = ({ tableData }) => {
  const [limit, setLimit] = useState(10);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("tddat a", tableData?.columns[0].tableSlug);
    dispatch(
      setCheckBoxDefaultValueAction({
        tableSlug: tableData?.columns[0].tableSlug,
        checkboxData: Array.apply(null, new Array(limit)).map(() => false),
      })
    );
  }, []);

  return (
    <div>
      <table class="GeneratedTable card-app">
        <thead>
          <tr>
            {tableData &&
              tableData?.columns.map((column) => (
                <th
                  style={column?.widthCell ? { width: column?.widthCell } : {}}
                >
                  {column?.title}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {tableData &&
            tableData?.rows.map((row, rowIndex) => (
              <TableCellType
                row={row}
                tableData={tableData}
                rowIndex={rowIndex}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;
