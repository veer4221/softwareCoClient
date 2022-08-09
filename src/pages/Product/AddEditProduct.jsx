import React from "react";
import DynamicForm from "../../components/DynamicForm";
import { productFormJSON } from "../../forms/ProductForm";

const AddEditProduct = () => {
  return (
    <>
      <div className="d-flex justify-content-end">
        <button>back</button>
      </div>
      <DynamicForm formData={productFormJSON} />
    </>
  );
};

export default AddEditProduct;
