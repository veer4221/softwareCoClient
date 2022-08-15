import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { getAllProductAction } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { getAllRoleAction } from "../../Redux/Actions/role.action";
import { PERMISSIONS } from "../../utils/staticObjects";
import { isSingalPermissionsAvailable } from "../../utils/PermissionChecker";
const PermissionList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const role = useSelector((state) => state?.role);
  useEffect(() => {
    dispatch(getAllRoleAction());
  }, []);
  return (
    <>
      {isSingalPermissionsAvailable(PERMISSIONS.VIEW_PERMISSIONS) ? (
        <div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 d-flex justify-content-between pt-3">
                <h3 style={{ color: "#ebe5e5b5" }}>Dynamic Role List </h3>
                {isSingalPermissionsAvailable(PERMISSIONS.ADD_ROLE_AND_PERMISSION) && (
                  <button className="btn add-btn" onClick={() => navigate(`/en/AddRole`)}>
                    Add New Role
                  </button>
                )}
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
                          {role &&
                            role?.getAllRole &&
                            role.getAllRole?.rows &&
                            role.getAllRole?.rows.map((row) => (
                              <tr>
                                <th> {row?.role_name} </th>
                                <td>
                                  {isSingalPermissionsAvailable(PERMISSIONS.EDIT_ROLE_AND_PERMISSIONS) && (
                                    <FiEdit style={{ color: "#78c628" }} size={20} onClick={() => navigate(`/en/Permissions/${row?.id}`)} />
                                  )}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/en" replace />
      )}
    </>
  );
};

export default PermissionList;
