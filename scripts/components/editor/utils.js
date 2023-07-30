import * as linkPage from "./linkPage.js";
import * as profilePage from "./profilePage.js";
import { removeItem } from "../localStorage.js";
export const navbar = () => {
  const htmlNavbar = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <!-- add logo -->
            <div class="card" style="width: 4rem;" id="image-logo">
            <img src="assets/images/rope.png" class="card-img-top" alt="...">
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav me-auto mb-4 mb-lg-0">
                    <li class="nav-item">
                        <p class="h3">deevlinks</p>
                </ul>
                <!-- add navbar buttons -->
                <div class="text-center mx-auto">
                    <button type="button" class="btn btn-outline-info" id="link-button">
                        <span class="btn-label"><i class="fa fa-chain"></i></span> Link</button>
                    <button type="button" class="btn btn-outline-dark" id="profile-button">
                        <span class="btn-label"><i class="fa fa-user-circle"></i></span> Profile details</button>
                </div>

                <div class="d-flex p-2 bd-highlight">
                    <button type="button" class="btn btn-outline-info" id="preview-button">Preview
                    </button>
                </div>
                <div class="d-flex p-2 bd-highlight">
                    <button type="button" class="btn btn-info" id="logout-button">Logout
                    </button>
                </div>
            </div>
        </div>
    </nav>`;
  document.body.insertAdjacentHTML("afterBegin", htmlNavbar);
};

const clearPages = () => {
  linkPage.clearPage();
  profilePage.clearPage();
};

export const navigate = () => {
  document.getElementById("link-button").onclick = () => {
    clearPages();
    linkPage.renderPage();
  };

  document.getElementById("profile-button").onclick = () => {
    clearPages();
    profilePage.renderPage();
  };

  document.getElementById("preview-button").onclick = () => {
    window.location.href = "preview.html";
  };

  document.getElementById("logout-button").onclick = () => {
    removeItem("profile-details");
    window.location.href = "index.html";
  };
};
