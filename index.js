// Import stylesheets
import "./form.css";
import matchRules from "match-rules";
import {
  InvalidFName,
  InvalidLName,
  InvalidLAdd,
  InvalidEmail,
  InvalidPhone
} from "./rules.js";

let countries = {
  USA: ["Washington", "Chicago", "Boston"],
  India: ["Pune", "Delhi", "Mumbai"]
};

function load() {
  let countrysel = document.getElementById("country");
  for (var country in countries) {
    // console.log("country")
    countrysel.options[countrysel.options.length] = new Option(country);
  }
  countrysel.onchange = function() {
    let citysel = document.getElementById("city");
    // countrysel.length = 1;
    citysel.length = 1;
    let cities = countries[this.value];
    for (let i = 0; i < cities.length; i++) {
      // console.log(cities[i])
      citysel.options[citysel.options.length] = new Option(cities[i]);
    }
  };
}
let fname = document.getElementById("firstName");
let lname = document.getElementById("lastName");
let address = document.getElementById("address");
let email = document.getElementById("email");
let country = document.getElementById("country");
let city = document.getElementById("city");
let mobile = document.getElementById("mobile");
let gender = document.getElementById("gender");
let dob = document.getElementById("dob");

function setErrorfor(input, message) {
  let form = input.parentElement;
  let small = form.querySelector("small");
  form.className = "element error";
  small.innerText = message;
}

function setSuccessfor(input) {
  let form = input.parentElement;
  form.className = "element success";
  console.log(form.className);
}

function checkfname() {
  let firstname = { name: fname.value };
  if (matchRules(firstname, InvalidFName) === "empty") {
    setErrorfor(fname, "name cannot be empty");
    return false;
  } else if (matchRules(firstname, InvalidFName) === "length") {
    setErrorfor(fname, "length must be greater than 2");
    return false;
  } else {
    setSuccessfor(fname);
    return true;
  }
}

function checklname() {
  let lastname = { name: lname.value };
  if (matchRules(lastname, InvalidLName) === "empty") {
    setErrorfor(lname, "name cannot be empty");
    return false;
  } else if (matchRules(lastname, InvalidLName) === "length") {
    setErrorfor(lname, "length must be greater than 2");
    return false;
  } else {
    setSuccessfor(lname);
    return true;
  }
}

function checkAddress() {
  let addressObj = { add: address.value };
  if (matchRules(addressObj, InvalidLAdd) === "empty") {
    setErrorfor(address, "address cannot be empty");
    return false;
  } else if (matchRules(addressObj, InvalidLAdd) === "length") {
    setErrorfor(address, "address length is less than 5");
    return false;
  } else {
    setSuccessfor(address);
    return true;
  }
}

function checkemail() {
  let emailObj = { email: email.value };

  if (matchRules(emailObj, InvalidEmail) === "empty") {
    setErrorfor(email, "email cannot be empty");
    return false;
  } else if (matchRules(emailObj, InvalidEmail) === "pattern") {
    setErrorfor(email, "email format is wrong");
    return false;
  } else {
    setSuccessfor(email);
    return true;
  }
}

function checkPhone() {
  let phoneObj = { phone: mobile.value };

  if (matchRules(phoneObj, InvalidPhone) === "empty") {
    setErrorfor(mobile, "mobile number is required");
    return false;
  } else if (matchRules(phoneObj, InvalidPhone) === "size") {
    setErrorfor(mobile, "mobile number should be of 10 digits");
    return false;
  } else {
    setSuccessfor(mobile);
    return true;
  }
}
fname.onblur = checkfname;
lname.onblur = checklname;
address.onblur = checkAddress;
email.onblur = checkemail;
mobile.onblur = checkPhone;
window.onload = load();
let submit = (document.getElementById("application").onsubmit = function(
  event
) {
  checkfields(event);
});
function checkfields(event) {
  if (
    checkfname() &&
    checklname() &&
    checkAddress() &&
    checkPhone() &&
    checkemail()
  )
    alert("form submitted successfully");
  else {
    alert("details are not complete");
    event.preventDefault();
  }
}
