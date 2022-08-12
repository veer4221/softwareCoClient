import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

const ProductCard = ({ productData }) => {
  const navigate = useNavigate();

  return (
    <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3">
      <div className="m-3 card-Product">
        <div className="d-flex justify-content-center">
          <img src={productData?.productImage} width="90px" height="100px" />
        </div>
        <div className=" ">
          <h4 className="pt-2 text-center">{productData?.productName} </h4>
          <p className="text-center word-break-app" style={{ color: "#ffffff6e" }}>
            {productData?.productInfo.slice(0, 22)}
            {productData?.productInfo.length > 26 && "...."}
          </p>
          <h3 className="text-center" style={{ color: "#00ff4566" }}>
            ₹ {productData?.MRP}
          </h3>
          <div className="d-flex justify-content-center p-3">
            <button className="btn view-more-btn" style={{ background: "#e4d510bf" }} onClick={() => navigate(`/en/productinfo/${productData?.id}`)}>
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
