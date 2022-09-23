import React, { useEffect, useState } from "react";
import moment from "moment";
import { TableColumnType } from "../../../../utils/staticObjects";
const DateCell = ({ row, column }) => {
  const [callValue, setCellValue] = useState();
  useEffect(() => {
    switch (column.type) {
      case TableColumnType.DATE_TIME:
        setCellValue(
          moment(new Date(row[`${column?.property}`])).format(
            "YYYY-MM-DD HH:mm"
          )
        );
        break;
      case TableColumnType.DATE:
        setCellValue(
          moment(new Date(row[`${column?.property}`])).format("YYYY-MM-DD")
        );
        break;
      case TableColumnType.TIME:
        setCellValue(
          moment(new Date(row[`${column?.property}`])).format("HH:mm") ||
            "00:00"
        );
        break;
    }
  }, []);

  return <td>{callValue}</td>;
};

export default DateCell;
