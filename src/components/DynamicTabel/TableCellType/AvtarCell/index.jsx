import React from "react";
import Avatar from "react-avatar";

const AvtarCell = ({ row, column }) => {
  return (
    <td>
      <Avatar
        maxInitials={1}
        size={40}
        round={true}
        name={
          row[`${column?.property}`] === undefined
            ? " "
            : row[`${column?.property}`]
        }
      />
    </td>
  );
};

export default AvtarCell;
