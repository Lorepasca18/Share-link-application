import { getItem } from "./components/localStorage.js";
import * as utils from "./components/editor/utils.js";

const currentUser = JSON.parse(getItem("profile-details")) || null;
if (!currentUser) {
  window.location.href = "login.html";
}

utils.navbar();
utils.navigate();
