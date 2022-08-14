import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { getAllProductAction } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state?.product);
  useEffect(() => {
    dispatch(getAllProductAction());
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 d-flex  pt-3">
          <h3 style={{ color: "#ebe5e5b5" }}>My Cart</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8 card-app">
          <div className="container-fluid">
            <div className="row " style={{ margin: "0", padding: "0" }}>
              {[...Array(4)].map(() => (
                <>
                  <div className="col-3 p-2 pt-3">
                    <img src="https://source.unsplash.com/user/c_v_r/1600x900" height="80" width="80" />
                  </div>
                  <div className="col-6 p-2">
                    <h5> this is demo product</h5>
                    <p>this is demo productthis is demo productthis is demo productthis is demo productthis is demo product</p>
                  </div>
                  <div className="col-3 p-2 pt-4 d-flex justify-content-center">
                    <h4>$ 5000/-</h4>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="col-4 ">
          <div className="card-app">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <h4>TOTAL</h4>
                  <hr />
                  <div className="container-fluid">
                    <div className="row">
                      {[
                        {
                          title: "Sub-Total:",
                          price: "5000",
                        },
                        {
                          title: "Delivery :",
                          price: "-",
                        },
                      ].map((data) => (
                        <>
                          <div className="col-6">
                            <h6>{data?.title} </h6>
                          </div>
                          <div className="col-6">
                            <h6>: $ {data?.price} </h6>
                          </div>
                        </>
                      ))}
                      <hr />
                      <div className="col-6">
                        <h6></h6>
                      </div>
                      <div className="col-6">
                        <h6>: $ 5000 </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
