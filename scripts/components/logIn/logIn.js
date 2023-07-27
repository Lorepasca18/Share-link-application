import { getItem, setItem } from "../localStorage.js";

const logInUser = () => {
  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;

  if (!inputEmail || !inputPassword) {
    console.log("Validation failed");
    return;
  }
  //now we have list of users
  const users = JSON.parse(getItem("users")) || [];
  let checkUser = users.find(
    (u) => u.email === inputEmail && u.password === inputPassword
  );
  if (!checkUser) {
    console.log("User not found");
    return;
  }

  // add current user in profile details
  setItem("profile-details", JSON.stringify(checkUser));
  const pageLink = window.location.href.replace("login.html", `index.html`);
  window.open(pageLink, "_self");
};

const handeLogin = () => {
  document.getElementById("login-button").onclick = () => {
    logInUser();
  };
};

handeLogin();

const redirectRegister = () => {
  document.getElementById("signUp-button").onclick = () => {
    window.location.href = "register.html";
  };
};

redirectRegister();
