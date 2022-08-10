import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

export const Permission = () => {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);
  const nodes = [
    {
      value: "mars",
      label: "Mars",
      children: [
        { value: "phobos", label: "Phobos" },
        { value: "deimos", label: "Deimos" },
      ],
    },
  ];
  const handleCheck = (check) => {
    console.log("check", check);
    setChecked(check);
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-between pt-3">
            <h3 style={{ color: "#ebe5e5b5" }}>Roles's Permissions</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="container-fluid">
              <div className="row " style={{ margin: "0", padding: "0" }}>
                <div className="col-12" style={{ overflowX: "scroll" }}>
                  <CheckboxTree
                    style={{ color: "white !important" }}
                    nodes={nodes}
                    checked={checked}
                    // iconsClass="fa5"
                    showNodeIcon={false}
                    expanded={expanded}
                    onCheck={(check) => handleCheck(check)}
                    onExpand={(expand) => setExpanded(expand)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
