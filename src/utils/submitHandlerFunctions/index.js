import { addProductAPI, addRoleAPI, loginAPI, roleUpdateAPI, signUpAPI, updateUserAPI } from "../network/apis";
import { callAPI } from "../network/networkManager";
import { SucessAndConformationAlert } from "../sweetAlert/alerts";

export { signupFunction, submitLoginFunction, submitSignupFunction, submitAssignRoleFunction, submitCreateProductFunction, submitCreateRoleFunction, submitRoleUpdateFunction };

async function signupFunction(values) {
  localStorage.setItem("user", JSON.stringify(values));
  return true;
}

async function submitLoginFunction(values) {
  try {
    const res = await callAPI(loginAPI, {}, "POST", { email: values?.useremail, password: values?.password });
    if (res?.data && res?.data?.success) {
      localStorage?.setItem("token", res?.data?.data?.token);
      localStorage?.setItem("user", JSON.stringify(res?.data?.data?.profile));
      SucessAndConformationAlert(true, "logedin sucessful", "");
      return true;
    }
    return false;
  } catch (error) {
    console.log(" API Call come execption ... ", error);
    return false;
  }
}

async function submitSignupFunction(values) {
  try {
    const res = await callAPI(signUpAPI, {}, "POST", values);
    console.log("res", res);
    if (res?.data && res?.data?.success) {
      SucessAndConformationAlert(true, res?.data?.message, "");
      return true;
    } else if (res?.data && !res?.data?.success) SucessAndConformationAlert(false, res?.data?.error, "");
    return false;
  } catch (error) {
    console.log(" API Call come execption ... ", error);
    return false;
  }
}

async function submitAssignRoleFunction(values, id) {
  try {
    const res = await callAPI(updateUserAPI, {}, "POST", { role_id: values.role, id });
    console.log("res", res);
    if (res?.data && res?.data?.success) {
      SucessAndConformationAlert(true, res?.data?.message, "");
      return true;
    } else if (res?.data && !res?.data?.success) SucessAndConformationAlert(false, res?.data?.error, "");
    return false;
  } catch (error) {
    console.log(" API Call come execption ... ", error);
    return false;
  }
}
async function submitCreateProductFunction(values) {
  console.log("valuesvaluesvalues", values, typeof values?.product_image);
  try {
    const res = await callAPI(addProductAPI, {}, "POST", { ...values, product_image: values.product_imagebase64 });
    console.log("res", res);
    if (res?.data && res?.data?.success) {
      SucessAndConformationAlert(true, res?.data?.message, "");
      return true;
    } else if (res?.data && !res?.data?.success) SucessAndConformationAlert(false, res?.data?.error, "");
    return false;
  } catch (error) {
    console.log(" API Call come execption ... ", error);
    return false;
  }
}

async function submitCreateRoleFunction(values) {

  console.log("valuesvaluesvalues", values, typeof values?.product_image);
  try {
    const res = await callAPI(addRoleAPI, {}, "POST", { role_name: values.rolename });
    console.log("res", res);
    if (res?.data && res?.data?.success) {
      SucessAndConformationAlert(true, res?.data?.message, "");
      return true;
    } else if (res?.data && !res?.data?.success) SucessAndConformationAlert(false, res?.data?.error, "");
    return false;
  } catch (error) {
    console.log(" API Call come execption ... ", error);
    return false;
  }
}



async function submitRoleUpdateFunction(values) {

  console.log("valuesvaluesvalues", values, typeof values?.product_image);
  try {
    const res = await callAPI(roleUpdateAPI, {}, "POST", values);
    console.log("res", res);
    if (res?.data && res?.data?.success) {
      SucessAndConformationAlert(true, res?.data?.message, "");
      return true;
    } else if (res?.data && !res?.data?.success) SucessAndConformationAlert(false, res?.data?.error, "");
    return false;
  } catch (error) {
    console.log(" API Call come execption ... ", error);
    return false;
  }
}
