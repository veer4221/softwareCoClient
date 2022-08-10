import React from "react";
import DynamicForm from "../../components/DynamicForm";
import { roleFormJSON } from "../../forms/RoleForm";

const AddRole = () => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <button>back</button>
      </div>
      <DynamicForm formData={roleFormJSON} />
    </>
  );
};

export default AddRole;
