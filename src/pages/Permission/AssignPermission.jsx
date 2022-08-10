import React from "react";
import DynamicForm from "../../components/DynamicForm";
import { userRoleFormJSON } from "../../forms/UserRoleForm";

const AssignPermission = () => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <button>back</button>
      </div>
      <DynamicForm formData={userRoleFormJSON} />
    </>
  );
};

export default AssignPermission;
