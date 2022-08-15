/* eslint-disable default-case */

import { productContants, userContants } from "../constants";

const initState = {
  error: null,
  message: "",
  getProductInfo: {},
  loading: false,
  productState: {},
  cart: {
    products: []
  },

  getAllProduct: {},
  productForm: {
    isChange: new Date(),
    formJson: {},
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
  switch (action.type) {
    case productContants.PRODUCT_FORM_SET_JSON:
      state = {
        ...state,
        loading: false,
        productForm: {
          ...state.productForm,
          formJson: action.payload,
        },
      };

    case productContants.GET_ALL_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productContants.GET_CART_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productContants.GET_CART_SUCCESS:
      state = {
        ...state,
        loading: false,
        cart: { ...state.cart, products: action.payload }
      };
      break;
    case productContants.GET_PRODUCT_REQUEST:
      state = {
        ...state,
        loading: true,
      };
      break;
    case productContants.GET_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
        getProductInfo: action.payload,
      };
      break;
    case productContants.GET_ALL_PRODUCT_SUCCESS:
      state = {
        ...state,
        loading: false,
        getAllProduct: action.payload,
      };
      break;


    default: {
      return state;
    }
  }

  return state;
};
