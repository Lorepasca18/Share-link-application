import { getItem, setItem } from "../localStorage.js";

const ID_PAGE = "page-link";

export const renderPage = () => {
  const htmlPage = `
    <div class="container" id="page-link">
    <div class="row">
        <div class="col" id="container-link-page">
            <p class="h2">Customize your links</p>
            <p>Add / edit / remove links below and then share all your profiles with the world!</p>
            <br>
            <div class="d-grid gap-2">
                <button class="btn btn-outline-info" type="button" id="add-link" >+Add new link</button>
                <br>
            </div>
            <div id="container-new-links"></div>
        </div>
    </div>
    <div id="container-new-links">
    <!-- Aici vom afișa link-urile existente dacă există -->
  </div>
    <div class="d-grid gap-1 col-1 mx-auto">
    <button type="button" class="btn btn-primaary" id="save-button">SAVE</button>
    </div>
    </div>

`;
  const containerParrent = document.getElementById("body");
  containerParrent.insertAdjacentHTML("beforeEnd", htmlPage);
  handleNewLink();
  handleSave();
  renderExistingLinks();
};

const renderNewLink = (indexRender, link) => {
  const platformValue = link?.platformValue || 0;
  const linkValue = link?.linkValue || "";
  const description = link?.description || "";
  const htmlPage = `
    <div id="container-link-item-${indexRender}">
    <form>
        <div class="mb-3 bg-light">
            <div class="container">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-0">
                    </div>
                    <div class="col col-lg-2">
                        <button type="button" class="btn btn-transparent remove-link-button" id="remove-button-${indexRender}">Remove</button>
                    </div>
                    <label class="form-label">Platform</label>
                    <select class="form-select" aria-label="Platform" id="input-platform-${indexRender}">
                        <option value="0" ${
                          platformValue === "0" ? "selected" : ""
                        }>GitHub</option>
                        <option value="1" ${
                          platformValue === "1" ? "selected" : ""
                        }>LinkedIn</option>
                        <option value="2" ${
                          platformValue === "2" ? "selected" : ""
                        }>YouTube</option>
                    </select>
                </div>
               
            </div>
                <div class="mb-3 bg-light">
                    <label class="form-label">Link</label>
                    <input type="text" class="form-control" id="input-link-${indexRender}" aria-describedby="linkHelp" value="${linkValue}">
                    <div id="linkHelp" class="form-text">You need to add the link for the picked platform from the list.</div>
                </div>
            </div>
            <div>
            <div class="mb-3 bg-light">
              <label class="form-label">Description</label>
             <input type="text" class="form-control" id="input-description-${indexRender}" aria-describedby="descriptionHelp" value="${description}">
            <div id="DescriptionHelp" class="form-text">You need to add the description for the link.</div>
            </div>
        </div>
    </form>
    </div>`;
  const containerParrent = document.getElementById("container-new-links");
  containerParrent.insertAdjacentHTML("beforeEnd", htmlPage);
  handleRemoveButton();
};

const renderExistingLinks = () => {
  const existingLinks = JSON.parse(getItem("links")) || [];

  // Iterăm prin link-urile existente și le afișăm pe pagină
  for (let i = 0; i < existingLinks.length; i++) {
    const link = existingLinks[i];
    renderNewLink(i + 1, link);
  }
};

const handleNewLink = () => {
  document.getElementById("add-link").onclick = () => {
    let numberOfLinks = getItem("newLink") || 0;
    numberOfLinks++;
    setItem("newLink", numberOfLinks);
    renderNewLink(numberOfLinks);
  };
};

// ? permite accesarea în siguranță a proprietăților unui obiect sau elementelor unui array, fără a genera erori în cazul în care valoarea este null sau undefined.
// ?.value  se referă la accesarea proprietății value a unui element din DOM. Mai precis, aceasta este o verificare sigură pentru a obține valoarea dintr-un element selectat din DOM.
const saveItems = () => {
  const numberOfNewLinks = getItem("newLink");
  if (numberOfNewLinks === 0) return;

  const existingLinks = JSON.parse(getItem("links")) || []; // Obținerea link-urile existente

  const links = [];
  let hasErrors = false;
  for (let i = 1; i <= numberOfNewLinks; i++) {
    const platformValue = document.getElementById(`input-platform-${i}`)?.value;
    const linkValue = document.getElementById(`input-link-${i}`)?.value;
    const description =
      document.getElementById(`input-description-${i}`)?.value || "";

    // link management and validation
    if (!platformValue || !linkValue) continue;
    if (platformValue === "0" && linkValue.indexOf("github.com") === -1) {
      alert("Error");
      hasErrors = true;
      continue;
    }
    if (platformValue === "1" && linkValue.indexOf("linkedin.com") === -1) {
      alert("Error");
      hasErrors = true;
      continue;
    }
    if (platformValue === "2" && linkValue.indexOf("youtube.com") === -1) {
      alert("Error");
      hasErrors = true;
      continue;
    }
    links.push({
      platformValue,
      linkValue,
      description,
    });
  }

  setItem("links", JSON.stringify(links));
  if (!hasErrors) {
    alert("Link successfully registered!");
  }
};

const handleSave = () => {
  document.getElementById("save-button").onclick = () => {
    saveItems();
    //
  };
};

const handleRemoveButton = () => {
  const buttons = document.querySelectorAll(".remove-link-button");

  // Attach a click event listener to each button
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      // Extract the dynamic number from the button's ID
      const buttonId = this.id;
      const dynamicNumber = buttonId.split("-").pop();

      const element = document.getElementById(
        `container-link-item-${dynamicNumber}`
      );
      if (element !== null) {
        element.remove();
      }
    });
  });
};

export const clearPage = () => {
  const element = document.getElementById(ID_PAGE);
  if (element !== null) {
    element.remove();
  }
};
