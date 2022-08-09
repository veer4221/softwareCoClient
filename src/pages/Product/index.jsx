import React from "react";
import ProductCard from "../../components/ProductCard";

const Product = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h3 style={{ color: "#ebe5e5b5" }}>Products List</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="container-fluid">
            <div className="row " style={{ margin: "0", padding: "0" }}>
              {[...Array(15)].map(() => (
                <ProductCard />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
