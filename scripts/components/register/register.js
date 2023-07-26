import { getItem, setItem } from "../localStorage.js";

const registerUser = () => {
  const user = {};
  const inputFirstName = document.getElementById("firstName").value;
  const inputLastName = document.getElementById("lastName").value;
  const inputEmail = document.getElementById("email").value;
  const inputPassword = document.getElementById("password").value;
  const inputrepeatPassword = document.getElementById("password-repeat").value;

  // Check if any of the required fields are empty
  if (
    !inputFirstName ||
    !inputLastName ||
    !inputEmail ||
    !inputPassword ||
    !inputrepeatPassword
  ) {
    console.log("Validation failed");
    return;
  }

  // Assign values to the users object
  user.firstName = inputFirstName;
  user.lastName = inputLastName;
  user.email = inputEmail;
  user.password = inputPassword;
  user.repeatPassword = inputrepeatPassword;

  // check if we already have the email

  const users = JSON.parse(getItem("users")) || [];

  if (users.find((u) => u.email === user.email)) {
    console.error("User already exist");
    return;
  }
  users.push(user);
  // Convert users to JSON and store in local storage
  setItem("users", JSON.stringify(users));
};

const handeRegister = () => {
  document.getElementById("register-button").onclick = () => {
    registerUser();
  };
};

handeRegister();
