import { getItem } from "./components/localStorage.js";
import * as previewPage from "./components/preview/previewPage.js";

const currentUser = JSON.parse(getItem("profile-details")) || null;
if (!currentUser) {
  window.location.href = "login.html";
}

previewPage.redirectToEditor();
