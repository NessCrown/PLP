const form = document.getElementById("form");
const fullName = document.getElementById("name");
const email = document.querySelector("#email");
const psw = document.querySelector("#psw");
const psw_2 = document.querySelector("#psw_2");
const age = document.querySelector("#age");
const gender = document.querySelector("#gender");
const country = document.querySelector("#country");
const terms = document.querySelector("#terms");
const submit = document.querySelector("#submit");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validation();
});

const errorMsg = (field, msg) => {
  const formControl = field.parentElement;
  formControl.className = "inputControl errormsg";
  const error = formControl.querySelector(".error");
  error.innerHTML = msg;
};
const successMsg = (field) => {
  const formControl = field.parentElement;
  formControl.className = "inputControl successmsg";
  const error = formControl.querySelector(".error");
  error.innerHTML = "";
};

const pswCheck = (field, min) => {
  const formControl = field.parentElement;
  const error = formControl.querySelector(".error");
  error.innerHTML = `Password must be more than ${min}`;
};

function validation() {
  //fullname

  //email
  if (email.value === "" || email.value == null) {
    errorMsg(email, "Email is  required");
  } else {
    successMsg(email);
  }
  //Password
  if (psw.value === "" || psw.value == null) {
    errorMsg(psw, "password is  required");
  } else if (psw.value !== "") {
    pswCheck(psw, 8);
  } else {
    successMsg(psw);
  }
}
