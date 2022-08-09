import React from "react";

const ProductInfo = () => {
  return (
    <>
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
                <div className="col-md-4 col-xs-12 col-lg-4 col-sm-12 pt-3">
                  <div className="card-app p-5">
                    <div className="d-flex justify-content-center">
                      <img src="https://picsum.photos/190/190?random=1" width="250px" height="250px" />
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
                      M.R.P : <span style={{ color: "#00ff4566" }}>₹ 50000/-</span>
                    </h3>
                  </div>
                  <div>
                    <h5 className="pt-2" style={{ color: "#999900" }}>
                      Product Information
                    </h5>
                    <p className="word-break-app">
                      asdlkajsdnas,mdna,mdnamm,sbnd,msanbccam,sndbfmnasdb dvc,masdnasdasdasddbas,bfmksndbfnmasdbfnmasdbf,asdnmbfm,bfm,ffm,asdnbfm,fb
                      vm,asdnbcfm,andbcf,masndbfm,asndbf,masdnbfsdm asdlkajsdnas,mdna,mdnamm,sbnd,msanbccam,sndbfmnasdb dvc,masdnb
                      vm,asdnbcfm,andbcf,masndbfm,asndbf,masdnbfsdm
                    </p>
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
