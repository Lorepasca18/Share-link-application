import { getItem } from "../localStorage.js";

const renderGitHub = (link) => {
  const htmlPage = `<div class="col-lg-12 bg-light p-3 d-flex justify-content-center align-items-center">
        <a href="${link}" target="_blank" class="col-6 col-sm-4 bg-dark d-flex justify-content-center align-items-center white-text">GitHub</a>
    </div>`;
  const containerParrent = document.getElementById("button-social-links");
  containerParrent.insertAdjacentHTML("beforeEnd", htmlPage);
};

const renderYoutube = (link) => {
  const htmlPage = `<div class="col-lg-12 bg-light p-3 d-flex justify-content-center align-items-center">
    <a href="${link}" target="_blank" class="col-6 col-sm-4 bg-danger d-flex justify-content-center align-items-center white-text ">Youtube</a>
  </div>`;
  const containerParrent = document.getElementById("button-social-links");
  containerParrent.insertAdjacentHTML("beforeEnd", htmlPage);
};

const renderLinkedIn = (link) => {
  const htmlPage = ` <div class="col-lg-12 bg-light p-3 d-flex justify-content-center align-items-center">
    <a href="${link}" target="_blank" class="col-6 col-sm-4  bg-info d-flex justify-content-center align-items-center white-text">LiknedIn</a>
  </div>`;
  const containerParrent = document.getElementById("button-social-links");
  containerParrent.insertAdjacentHTML("beforeEnd", htmlPage);
};

const renderPageInfo = () => {
  const userDetails = localStorage.getItem("profile-details");
  if (userDetails !== null) {
    const profileDetails = JSON.parse(userDetails);
    document.getElementById("preview-name").textContent =
      (profileDetails.firstName || "") + " " + (profileDetails.lastName || "");
    document.getElementById("preview-email").textContent =
      profileDetails.email || "";
  }

  const items = JSON.parse(getItem("links"));

  if (!items || items.length === 0) return;
  for (let i = 0; i < items.length; i++) {
    const currentItem = items[i];
    if (currentItem.platformValue === "0") {
      renderGitHub(currentItem.linkValue);
    }
    if (currentItem.platformValue === "1") {
      renderLinkedIn(currentItem.linkValue);
    }
    if (currentItem.platformValue === "2") {
      renderYoutube(currentItem.linkValue);
    }
  }
};

renderPageInfo();
