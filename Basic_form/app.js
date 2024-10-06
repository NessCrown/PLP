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

const checkAge = (field, min, max) => {
  const formControl = field.parentElement;
  const error = formControl.querySelector(".error");
  error.innerHTML = `The age limit is in between ${min} and ${max}`;
};

const pswMatch = (password1, password2) => {
  if (password1 != password2) {
    errorMsg(psw_2, "Password does not match");
  }
};

// const termChk = (field, password2) => {
//   if (password1 != password2) {
//     errorMsg(psw_2, "Password does not match");
//   }
// };
function validation() {
  //fullname
  if (fullName.value === "" || fullName.value == null) {
    errorMsg(fullName, "Fullname is  required");
  } else {
    successMsg(fullName);
    console.log(fullName.value);
  }

  //email
  if (email.value === "" || email.value == null) {
    errorMsg(email, "Email is  required");
  } else {
    successMsg(email);
  }
  //Password
  if (psw.value === "" || psw.value == null) {
    errorMsg(psw, "password is  required");
  } else if (psw.value.length < 8) {
    pswCheck(psw, 8);
  } else {
    successMsg(psw);
  }
  //Password confirmed
  if (psw_2.value === "" || psw_2.value == null) {
    errorMsg(psw_2, "confirmed password is  required");
  } else if (psw_2.value !== psw.value) {
    pswMatch(psw, psw_2);
  } else {
    successMsg(psw_2);
  }

  //Age
  if (age.value === "" || age.value == null) {
    errorMsg(age, "Age is  required");
  } else if (age.value < 18 || age.value > 100) {
    checkAge(age, 18, 100);
  } else {
    successMsg(age);
  }
  //Term
  if (terms.checked == false) {
    errorMsg(terms, "Please check the Terms and Conditions");
  } else {
    successMsg(terms);
  }
}
