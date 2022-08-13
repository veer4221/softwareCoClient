import React, { useEffect, useState } from "react";
import DynamicForm from "../../components/DynamicForm";
import { userRoleFormJSON } from "../../forms/UserRoleForm";
import { useDispatch, useSelector } from "react-redux";
import { setUserDataAction, setUserRoleAssignJSONAction } from "../../Redux/Actions";
import { useParams } from "react-router-dom";
const AssignPermission = () => {
  let params = useParams();
  const [jsonForm, setJsonForm] = useState(userRoleFormJSON);
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    // debugger;
    dispatch(setUserRoleAssignJSONAction(userRoleFormJSON, params.id));
    setTimeout(() => {
      // dispatch(setUserDataAction(params?.id));
    }, 4000);
  }, []);
  useEffect(() => {}, []);
  useEffect(() => {
    setJsonForm(user?.userRoleAssignForm?.formJson);
  }, [user?.userRoleAssignForm?.formJson]);
  return (
    <>
      <div className="d-flex justify-content-end">
        <button className="btn" ZZZ>
          back
        </button>
      </div>
      {user && user?.loading ? <></> : <DynamicForm formData={jsonForm} />}
    </>
  );
};

export default AssignPermission;
