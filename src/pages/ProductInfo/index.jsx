import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getProductInfoAction } from "../../Redux/Actions";
import { useParams, useNavigate } from "react-router-dom";

const ProductInfo = () => {
  let params = useParams();
  const navigate = useNavigate();
  const product = useSelector((state) => state?.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductInfoAction(params?.id));
  }, []);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h3 style={{ color: "#ebe5e5b5" }}>Products List</h3>
          </div>
          <div className="d-flex justify-content-end">
            <button className="btn back-btn" onClick={() => navigate("/en/product")}>
              back
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row " style={{ margin: "0", padding: "0" }}>
                <div className="col-md-4 col-xs-12 col-lg-4 col-sm-12 pt-3">
                  <div className="card-app p-5">
                    <div className="d-flex justify-content-center">
                      <img src={product?.getProductInfo?.Productdata?.product_image} width="250px" height="250px" />
                    </div>
                    <div className="d-flex justify-content-center mt-4">
                      <button className="btn view-more-btn" style={{ background: "#e4d510bf" }}>
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-xs-12 col-lg-8  col-sm-12 card-app word-break-app mt-3">
                  <div className="pt-3">
                    <h3>
                      M.R.P : <span style={{ color: "#00ff4566" }}>₹ {product?.getProductInfo?.Productdata?.m_r_p}/-</span>
                    </h3>
                  </div>
                  <div>
                    <h5 className="pt-2" style={{ color: "#999900" }}>
                      {product?.getProductInfo?.Productdata?.product_name}
                    </h5>
                    <p className="word-break-app">{product?.getProductInfo?.Productdata?.product_information}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
