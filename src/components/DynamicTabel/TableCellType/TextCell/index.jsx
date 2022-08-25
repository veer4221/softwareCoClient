import React from "react";

const TextCell = ({ row, column }) => {
  return <td>{row[`${column?.property}`]}</td>;
};

export default TextCell;
