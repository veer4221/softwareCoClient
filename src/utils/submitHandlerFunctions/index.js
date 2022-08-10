import { loginAPI } from "../network/apis";
import { callAPI } from "../network/networkManager";

export { signupFunction, submitLoginFunction };

async function signupFunction(values) {
  localStorage.setItem("user", JSON.stringify(values));
  return true;
}

async function submitLoginFunction(values) {
  try {
    // alert("ok")
    console.log("valuesvalues", values)
    callAPI(loginAPI, {}, "POST", { email: values?.useremail, password: values?.password }).then((data) => console.log("body", data))
    const loginRes = await callAPI(loginAPI, {}, "POST", { email: values?.useremail, password: values?.password })
    console.log("loginRes", loginRes)
  } catch (error) {
    console.log(' API Call come execption ... ', error)
  }

  var errorArr = [];
  let user = JSON.parse(localStorage.getItem("user"));
  if (user.useremail !== values.useremail) errorArr.push("email is not valid");
  if (user.password !== values.password) errorArr.push("password is not valid");
  if (errorArr.length === 0)
    return { message: "sucessFull Login", result: true };
  return { message: errorArr[0], result: false };
}
