import React from "react";
import { useNavigate } from "react-router-dom";
import DynamicForm from "../../components/DynamicForm";
import { roleFormJSON } from "../../forms/RoleForm";

const AddRole = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex justify-content-end">
        <button className="btn back-btn" onClick={() => navigate(`/en/PermissionList`)}>
          back
        </button>
      </div>
      <DynamicForm formData={roleFormJSON} />
    </>
  );
};

export default AddRole;
