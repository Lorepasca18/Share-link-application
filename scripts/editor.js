import { getItem } from "./components/localStorage.js";
import * as utils from "./components/editor/utils.js";

//If currentUser is null, the code redirects the user to the login.html page. Otherwise, the code calls the navbar() and navigate() functions.

const currentUser = JSON.parse(getItem("profile-details")) || null;
if (!currentUser) {
  window.location.href = "login.html";
}

utils.navbar();
utils.navigate();
