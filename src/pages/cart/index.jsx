import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { getAllProductAction, getCartDataAction } from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import { submitRemoveFromCartFunction } from "../../utils/submitHandlerFunctions";
import { isSingalPermissionsAvailable } from "../../utils/PermissionChecker";
import { PERMISSIONS } from "../../utils/staticObjects";

const Cart = () => {
  const [isChange, setIsChange] = useState(new Date());
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state?.product);
  useEffect(() => {
    dispatch(getCartDataAction());
  }, [isChange]);
  return (
    <>
      {isSingalPermissionsAvailable(PERMISSIONS.VIEW_CART) ? (
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
                  {product &&
                    product?.cart &&
                    product?.cart?.products &&
                    product?.cart?.products.map((data) => (
                      <>
                        <div className="col-3 p-2 pt-3">
                          <img src={data?.product_image} height="80" width="80" />
                        </div>
                        <div className="col-5 p-2">
                          <h5> {data?.product_name.length > 20 ? data?.product_name.slice(0, 20) + "...." : data?.product_name}</h5>
                          <p className="word-break-app">
                            {data?.product_information.length > 60 ? data?.product_information.slice(0, 60) + "...." : data?.product_information}
                          </p>
                        </div>
                        <div className="col-3 p-2 pt-4 d-flex justify-content-center">
                          <h4>₹ {data?.m_r_p}/-</h4>
                        </div>
                        {isSingalPermissionsAvailable(PERMISSIONS.REMOVE_FROM_CART) && (
                          <div
                            className="col-1 p-2 pt-4 d-flex justify-content-center"
                            onClick={() => submitRemoveFromCartFunction(data?.id, setIsChange)}
                          >
                            <FaTrashAlt color="red" />
                          </div>
                        )}
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
                              price: product?.cart?.products.reduce((accumulator, current) => accumulator + Number(current["m_r_p"]), 0),
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
                                <h6>: ₹ {data?.price} </h6>
                              </div>
                            </>
                          ))}
                          <hr />
                          <div className="col-6">
                            <h6></h6>
                          </div>
                          <div className="col-6">
                            <h6>: ₹{product?.cart?.products.reduce((accumulator, current) => accumulator + Number(current["m_r_p"]), 0)}</h6>
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
      ) : (
        <Navigate to="/en" replace />
      )}
    </>
  );
};

export default Cart;
