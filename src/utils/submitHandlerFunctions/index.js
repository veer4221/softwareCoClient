import { loginAPI } from "../network/apis";
import { callAPI } from "../network/networkManager";
import { popupSucessAndConformationAlert } from "../sweetAlert/alerts";

export { signupFunction, submitLoginFunction };

async function signupFunction(values) {
  localStorage.setItem("user", JSON.stringify(values));
  return true;
}

async function submitLoginFunction(values) {
  try {
    const res = await callAPI(loginAPI, {}, "POST", { email: values?.useremail, password: values?.password })
    if (res?.data && res?.data?.success) {
      localStorage?.setItem("token", JSON.stringify(res?.data?.data?.token))
      localStorage?.setItem("user", JSON.stringify(res?.data?.data?.profile))
      return true
    }
    return false
  } catch (error) {
    console.log(' API Call come execption ... ', error)
    return false
  }


}
