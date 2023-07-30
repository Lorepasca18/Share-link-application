import { getItem, setItem } from "../localStorage.js";

const ID_PAGE = "page-profile";

export const renderPage = () => {
  const htmlPage = `
  <div class="container" id="page-profile">
  <div class="row">
      <div class="col -light bg-light" id="container-profile">
          <p class="h2">Profile Details</p>
          <p>Add your details to create a personal touch to your profile.</p>
          <br>
          <div class="row">
              <div class="col-4">Profile picture</div>
              <div class="col-4">Change Image</div>
              <div class="col-4">Image must be bellow 1024x1024px.Use PNG,JPG or BMP format</div>
          </div>
          <br>
          <div class="row">
  <div class="col-4">
      <p>First name*</p>
  </div>
  <div class="col-8">
      <input type="text" class="form-control" id="firstName"
          placeholder="Enter your first name">
  </div>
  <div class="col-4">
      <p>Last name*</p>
  </div>
  <div class="col-8">
      <input type="text" class="form-control" id="lastName"
          placeholder="Enter your last name">
  </div>
  <div class="col-4">
      <p>Email</p>
  </div>
  <div class="col-8">
      <input type="email" class="form-control" id="emailAdress"
          placeholder="Enter your email adress">
  </div>
  <div class="col-4">
      <p>Password</p>
  </div>
  <div class="col-8">
      <input type="password" class="form-control" id="password"
          placeholder="Enter your password">
  </div>
</div>
      </div>
  </div>
  <div class="d-grid gap-1 col-1 mx-auto">
  <button type="button" class="btn btn-primary" id="save-button" style="text-align: center; margin: 0 auto">SAVE</button>
  </div>
</div>
`;
  const containerParrent = document.getElementById("body");
  containerParrent.insertAdjacentHTML("beforeEnd", htmlPage);
  handleSave();
  populateCredential();
};

export const clearPage = () => {
  const element = document.getElementById(ID_PAGE);
  if (element !== null) {
    element.remove();
  }
};

const saveCredential = () => {
  const profileDetails = {}; // Change to an object
  const inputFirstName = document.getElementById("firstName").value;
  const inputLastName = document.getElementById("lastName").value;
  const inputEmailAdress = document.getElementById("emailAdress").value;
  const inputPassword = document.getElementById("password").value;

  // Check if any of the required fields are empty
  if (
    !inputFirstName ||
    !inputLastName ||
    !inputEmailAdress ||
    !inputPassword
  ) {
    return;
  }

  // Assign values to the profileDetails object
  profileDetails.firstName = inputFirstName;
  profileDetails.lastName = inputLastName;
  profileDetails.email = inputEmailAdress;
  profileDetails.password = inputPassword;

  // Convert profileDetails to JSON and store in local storage
  setItem("profile-details", JSON.stringify(profileDetails));
};

const handleSave = () => {
  document.getElementById("save-button").onclick = () => {
    saveCredential();
    alert("Profile details successfully saved!");
  };
};

// populate html fields with actual values from local Storage
const populateCredential = () => {
  const value = getItem("profile-details");
  if (value !== null) {
    const profileDetails = JSON.parse(value);
    document.getElementById("firstName").value = profileDetails.firstName || "";
    document.getElementById("lastName").value = profileDetails.lastName || "";
    document.getElementById("emailAdress").value = profileDetails.email || "";
    document.getElementById("password").value = profileDetails.password || "";
  }
};
