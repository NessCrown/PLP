const form = document.querySelector("form");
const Fname = document.querySelector("#name");
const Femail = document.querySelector("#email");
const contactMethod = document.querySelector("#contactMethod");
const terms = document.querySelector("#terms");
const submit = document.querySelector("#submit");
const formSummary = document.querySelector("#formSummary");

const information = [];
form.addEventListener("submit", formSubmited);

function formSubmited(e) {
  e.preventDefault();

  const formInput = new FormData(form);
  const obj = Object.fromEntries(formInput);

  //   formPosted(obj);
  if (formPosted(obj)) render(obj);
}

function formPosted(formInput) {
  formSummary.innerHTML = "";
  isValid = true;
  if (!formInput.name || formInput.name.trim() === "") {
    isValid = false;
    formSummary.innerHTML += `<p>Name is required</p>`;
  }
  if (!formInput.email) {
    isValid = false;
    formSummary.innerHTML += `<p>Email is required</p>`;
  }
  if (!formInput.contactMethod) {
    isValid = false;
    formSummary.innerHTML += ` <p>Please select how we can contact you</p>`;
  }
  if (!formInput.terms) {
    isValid = false;
    formSummary.innerHTML += `<p>Please accept the terms and conditions</p>`;
  }
  return isValid;
}

function render(data) {
  //   const output = formPosted(data);
  document.querySelector(".preName").innerHTML = `${data.name}`;
  document.querySelector(".preEmail").innerHTML = `${data.email}`;
  document.querySelector(".preContact").innerHTML = `${data.contactMethod}`;
  document.querySelector(".preTerms").innerHTML = `${
    data.terms ? "Yes" : "No"
  }`;
}
