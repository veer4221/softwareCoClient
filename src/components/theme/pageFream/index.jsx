import React from "react";

const pageFrame = ({ children }) => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-between pt-3">
            <h3 style={{ color: "#ebe5e5b5" }}> Role's Permissions</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default pageFrame;
