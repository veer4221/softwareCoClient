import React from "react";

const DroupDownCell = ({ row, column }) => {
  return (
    <td>
      <div class="form-group p-3">
        <label for="exampleSelect">Example select</label>
        <select class="form-control" id="exampleSelect">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </td>
  );
};

export default DroupDownCell;
