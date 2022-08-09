import React from "react";
import "./style.scss";
const ProductCard = () => {
  return (
    <div className="col-md-3 col-sm-12 col-xs-12 col-lg-3">
      <div className="m-3 card-Product">
        <div className="d-flex justify-content-center">
          <img src="https://picsum.photos/190/190?random=1" width="50%" height="50%" />
        </div>
        <div className=" ">
          <h4 className="pt-2 text-center">Product Name</h4>
          <p className="text-center word-break-app" style={{ color: "#ffffff6e" }}>
            desc asdasndmasnd,massnd,mas asdasdasda a asdasd .....
          </p>
          <h3 className="text-center" style={{ color: "#00ff4566" }}>
            ₹ 50000
          </h3>
          <div className="d-flex justify-content-center p-3">
            <button className="btn view-more-btn" style={{ background: "#e4d510bf" }}>
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
