import React, { useEffect, useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import { getPermissionMenuAction } from "../../Redux/Actions/role.action";
import { submitRoleUpdateFunction } from "../../utils/submitHandlerFunctions";
import { useNavigate } from "react-router-dom";

export const Permission = () => {
  let params = useParams();
  const navigate = useNavigate();

  const role = useSelector((state) => state?.role);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState([]);
  const [checked, setChecked] = useState(role?.permissionMenu?.permissions);
  // const nodes = [
  //   {
  //     value: "mars",
  //     label: "Mars",
  //     children: [
  //       { value: "phobos", label: "Phobos" },
  //       { value: "deimos", label: "Deimos" },
  //     ],
  //   },
  // ];
  const handleCheck = (check) => {
    console.log("check", check);
    setChecked(check);
  };
  useEffect(() => {
    setChecked(role?.permissionMenu?.permissions);
  }, [role?.permissionMenu?.permissions]);
  useEffect(() => {
    dispatch(getPermissionMenuAction(params?.id));
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-between pt-3">
            <h3 style={{ color: "#ebe5e5b5" }}>{role?.permissionMenu?.roleinfo?.role_name || "Role"}'s Permissions</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="container-fluid">
              <div className="row " style={{ margin: "0", padding: "0" }}>
                {role && role?.permissionMenu && role?.permissionMenu?.nodes && (
                  <>
                    <div className="col-12" style={{ overflowX: "scroll" }}>
                      <CheckboxTree
                        style={{ color: "white !important" }}
                        nodes={role?.permissionMenu?.nodes}
                        checked={checked}
                        // iconsClass="fa5"
                        showNodeIcon={false}
                        expanded={expanded}
                        onCheck={(check) => handleCheck(check)}
                        onExpand={(expand) => setExpanded(expand)}
                      />
                    </div>
                    <div className="">
                      <button
                        className="btn m-3 view-more-btn"
                        style={{ background: "#23a71f6b" }}
                        onClick={() => {
                          submitRoleUpdateFunction({ id: params?.id, permission: checked, role_name: role?.permissionMenu?.roleinfo?.role_name }) &&
                            navigate(`/en/PermissionList`);
                        }}
                      >
                        submit
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
