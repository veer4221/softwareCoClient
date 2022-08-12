import React, { useEffect, useState } from "react";
import DynamicForm from "../../components/DynamicForm";
import { userRoleFormJSON } from "../../forms/UserRoleForm";
import { useDispatch, useSelector } from "react-redux";
import { setUserDataAction, setUserRoleAssignJSONAction } from "../../Redux/Actions";
import { useParams, useNavigate } from "react-router-dom";

const AssignPermission = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [jsonForm, setJsonForm] = useState(userRoleFormJSON);
  const user = useSelector((state) => state?.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUserRoleAssignJSONAction(userRoleFormJSON));
    dispatch(setUserDataAction(params?.id));
  }, []);
  useEffect(() => setJsonForm(user?.userRoleAssignForm?.formJson), [user?.userRoleAssignForm?.formJson]);
  return (
    <>
      <div className="d-flex justify-content-end">
        <button className="btn back-btn" onClick={() => navigate("/en/userList")}>
          back
        </button>
      </div>
      {user?.loading ? <></> : <DynamicForm formData={jsonForm} />}
    </>
  );
};

export default AssignPermission;
