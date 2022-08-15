import React, { useEffect, useState } from "react";
import DynamicForm from "../../components/DynamicForm";
import { productFormJSON } from "../../forms/ProductForm";
import { useDispatch, useSelector } from "react-redux";
import { setProductFormJSONAction } from "../../Redux/Actions";
import { useNavigate } from "react-router-dom";

const AddEditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state?.product);
  const [jsonForm, setJsonForm] = useState(productFormJSON);
  useEffect(() => {
    dispatch(setProductFormJSONAction(productFormJSON));
  }, []);
  useEffect(() => setJsonForm(product?.productForm?.formJson), [product?.productForm?.formJson]);
  return (
    <>
      <div className="d-flex justify-content-end">
        <button className="btn back-btn" onClick={() => navigate(`/en/product`)}>
          back
        </button>
      </div>
      <DynamicForm formData={jsonForm} />
    </>
  );
};

export default AddEditProduct;
