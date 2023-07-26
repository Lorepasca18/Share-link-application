import { getItem } from "../localStorage.js";

export const redirectToEditor = () => {
  document.getElementById("backToEditor-button").onclick = () => {
    window.location.href = "index.html";
  };
};

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

const renderLinks = () => {
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

renderLinks();

const renderUserDetails = () => {
  const userDetails = localStorage.getItem("profile-details");
  if (userDetails !== null) {
    const profileDetails = JSON.parse(userDetails);
    document.getElementById("preview-name").textContent =
      (profileDetails.firstName || "") + " " + (profileDetails.lastName || "");
    document.getElementById("preview-email").textContent =
      profileDetails.email || "";
  }
};

renderUserDetails();

// share link button
const shareLink = () => {
  const button = document.getElementById("shareLink-button");
  // cream un no obiect in care punem date din local storage
  const shareLinkObj = {
    details: getItem("profile-details"),
    links: getItem("links"),
  };
  // we want to delete the password, because we send it via link, and it's not ok
  delete shareLinkObj.details.password;
  // cu functia asta window.btoa encodam datele din shareLinkObj, ca se le putem pune in url si sa nu fie o chestie usor de citit
  const encodedLink = window.btoa(JSON.stringify(shareLinkObj));
  const pageLink = window.location.href.replace(
    "preview.html",
    `share.html?share=${encodedLink}`
  );

  button.addEventListener("click", () => {
    window.open(pageLink, "_blank");
  });
};

shareLink();
