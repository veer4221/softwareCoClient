import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { getUserListAPI } from "../../utils/network/apis";
import { callAPI } from "../../utils/network/networkManager";
import { useNavigate } from "react-router-dom";

const UserList = () => {
  const [userData, setUserData] = useState([]);
  const navigate = useNavigate();

  const fatchUserData = async () => {
    try {
      const res = await callAPI(getUserListAPI, {}, "get");
      if (res?.data && res?.data?.success) return setUserData(res?.data?.rows);
    } catch (error) {
      console.log(" API Call come execption ... ", error);
    }
  };
  useEffect(() => {
    fatchUserData();
  }, []);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-between pt-3">
            <h3 style={{ color: "#ebe5e5b5" }}>UserList</h3>
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
                        <th> Name </th>
                        <th> Email</th>
                        <th> Role</th>
                        <th> Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {userData &&
                        userData.length > 0 &&
                        userData.map((row) => (
                          <tr>
                            <td>
                              {row?.firstname} {row?.lastname}
                            </td>
                            <td> {row?.email} </td>
                            <td> {row?.Role?.role_name || ``} </td>
                            <td>
                              <FiEdit style={{ color: "#78c628" }} size={20} onClick={() => navigate(`/en/AssignPermission/${row?.id}`)} />
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
  );
};

export default UserList;
