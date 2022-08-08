import React from "react";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{
          background: "#BE93C5" /* fallback for old browsers */,
          background: "-webkit-linear-gradient(to right, #7BC6CC, #BE93C5)",
          background: "linear-gradient(to right, #7BC6CC, #BE93C5)",
        }}
      >
        <div className="col-12 d-flex justify-content-center">
          <h2>Dynamic Form Example</h2>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
