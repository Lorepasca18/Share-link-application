import { getItem, setItem } from "../localStorage.js";

const ID_PAGE = "page-link";

export const renderPage = () => {
  const htmlPage = `
    <div class="container" id="page-link">
    <div class="row align-items-start">
        <div class="col">
        </div>
        <div class="col" id="container-link-page">
            <p class="h2">Customize your links</p>
            <p>Add / edit / remove links below and then share all your profiles with the world!</p>
            <br>
            <div class="d-grid gap-2">
                <button class="btn btn-outline-primary" type="button" id="add-link" >+Add new link</button>
                <br>
            </div>
            <div id="container-new-links"></div>
        </div>
    </div>
    <button type="button" class="btn btn-transparent" id="save-button">SAVE</button>
</div>

`;
  document.body.insertAdjacentHTML("beforebegin", htmlPage);
  handleNewLink();
  handleSave();
};

const renderNewLink = (indexRender) => {
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
                        <option value="0" selected>GitHub</option>
                        <option value="1">LinkedIn</option>
                        <option value="2">YouTube</option>
                    </select>
                    <div id="platformHelp" class="form-text">You need to pick the platform from the list.</div>
                </div>
                <div class="mb-3 bg-light">
                    <label class="form-label">Link</label>
                    <input type="text" class="form-control" id="input-link-${indexRender}" aria-describedby="emailHelp">
                    <div id="linkHelp" class="form-text">You need to add the link for the picked platform from the
                        list.</div>
                </div>
            </form>
</div>
`;
  const containerParrent = document.getElementById("container-new-links");
  containerParrent.insertAdjacentHTML("beforeEnd", htmlPage);
  handleRemoveButton();
};

const handleNewLink = () => {
  document.getElementById("add-link").onclick = () => {
    let numberOfLinks = getItem("newLink") || 0;
    numberOfLinks++;
    setItem("newLink", numberOfLinks);
    renderNewLink(numberOfLinks);
  };
};

const saveItems = () => {
  const numberOfItems = getItem("newLink");
  if (numberOfItems === 0) return;
  const links = [];
  for (let i = 1; i <= numberOfItems; i++) {
    let platformValue, linkValue;
    if (document.getElementById(`input-platform-${i}`)) {
      platformValue = document.getElementById(`input-platform-${i}`).value;
    }
    if (document.getElementById(`input-link-${i}`)) {
      linkValue = document.getElementById(`input-link-${i}`).value;
    }

    if (!platformValue || !linkValue) continue;
    links.push({
      platformValue,
      linkValue,
    });
  }
  setItem("links", JSON.stringify(links));
};

const handleSave = () => {
  document.getElementById("save-button").onclick = () => {
    saveItems();
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
