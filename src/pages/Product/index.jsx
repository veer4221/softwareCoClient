import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { getAllProductAction } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) => state?.product);
  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex justify-content-between pt-3">
          <h3 style={{ color: "#ebe5e5b5" }}>Products List</h3>
          <button className="btn add-btn" onClick={() => navigate(`/en/addProduct`)}>
            Add Product{" "}
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="container-fluid">
            <div className="row " style={{ margin: "0", padding: "0" }}>
              {product &&
                !product.loading &&
                product.getAllProduct &&
                product.getAllProduct.rows &&
                product.getAllProduct.rows.map((row) => (
                  <ProductCard
                    productData={{
                      MRP: row?.m_r_p ? row?.m_r_p : 0,
                      productImage: row?.product_image,
                      productInfo: row?.product_information ? row?.product_information : "test",
                      id: row?.id,
                      productName: row?.product_name ? row?.product_name : "test",
                    }}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
