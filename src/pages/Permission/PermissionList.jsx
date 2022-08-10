import React from "react";
import { FiEdit } from "react-icons/fi";
const PermissionList = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-between pt-3">
            <h3 style={{ color: "#ebe5e5b5" }}>Dynamic Role List </h3>
            <button
              className="btn "
              style={{ background: "#b9b3b585", color: "#ffff" }}
            >
              Add New Role
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="container-fluid">
              <div className="row " style={{ margin: "0", padding: "0" }}>
                <div className="col-12" style={{ overflowX: "scroll" }}>
                  <table width="100%" className="card-app">
                    <thead>
                      <tr>
                        <th> RoleName </th>

                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th> Width </th>

                        <td>
                          <FiEdit style={{ color: "#78c628" }} size={20} />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PermissionList;
