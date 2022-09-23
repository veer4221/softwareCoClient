import React from "react";
import { TableColumnType } from "../../../utils/staticObjects";
import CheckboxCell from "./CheckboxCell";
import DroupDownCell from "./DroupDownCell";
import ImageCell from "./ImageCell";
import SummaryCell from "./SummaryCell";
import TextCell from "./TextCell";
import { useDispatch, useSelector } from "react-redux";
import DateCell from "./DateCell";
import AvtarCell from "./AvtarCell";

const TableCellType = ({ row, tableData, rowIndex }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      {tableData?.columns.map((column) => {
        switch (column?.type) {
          case TableColumnType.SUMMARY:
            return (
              <SummaryCell row={row} column={column} rowIndex={rowIndex} />
            );
          case TableColumnType.TEXT:
            return <TextCell row={row} column={column} rowIndex={rowIndex} />;
          case TableColumnType.IMAGE:
            return <ImageCell row={row} column={column} rowIndex={rowIndex} />;
          case TableColumnType.DROPDOWN:
            return (
              <DroupDownCell row={row} column={column} rowIndex={rowIndex} />
            );
          case TableColumnType.CHECKBOX:
            return (
              <CheckboxCell row={row} column={column} rowIndex={rowIndex} />
            );
          case TableColumnType.DATE_TIME:
          case TableColumnType.DATE:
          case TableColumnType.TIME:
            return <DateCell row={row} column={column} rowIndex={rowIndex} />;
          case TableColumnType.AVATAR_AND_NAME:
            return <AvtarCell row={row} column={column} rowIndex={rowIndex} />;
        }
      })}
    </tr>
  );
};

export default TableCellType;
