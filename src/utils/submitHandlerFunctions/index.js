export { signupFunction, loginFunction };

async function signupFunction(values) {
  localStorage.setItem("user", JSON.stringify(values));
  return true;
}

async function loginFunction(values) {
  var errorArr = [];
  let user = JSON.parse(localStorage.getItem("user"));
  if (user.useremail !== values.useremail) errorArr.push("email is not valid");
  if (user.password !== values.password) errorArr.push("password is not valid");
  if (errorArr.length === 0)
    return { message: "sucessFull Login", result: true };
  return { message: errorArr[0], result: false };
}
