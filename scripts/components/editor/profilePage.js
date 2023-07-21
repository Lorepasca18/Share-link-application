const ID_PAGE = "page-profile";

export const renderPage = () => {
  const htmlPage = `
  <div class="container" id="page-profile">
  <div class="row align-items-start">
      <div class="col">
      </div>
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
                  <input type="text" class="form-control" id="formGroupExampleInput"
                      placeholder="Enter your first name">
              </div>
              <div class="col-4">
                  <p>Last name*</p>
              </div>
              <div class="col-8">
                  <input type="text" class="form-control" id="formGroupExampleInput"
                      placeholder="Enter your last name">
              </div>
              <div class="col-4">
                  <p>Email</p>
              </div>
              <div class="col-8">
                  <input type="text" class="form-control" id="formGroupExampleInput"
                      placeholder="Enter your email adress">
              </div>
          </div>
      </div>
  </div>
  <button type="button" class="btn btn-transparent" id="save-button">SAVE</button>

</div>
`;
  document.body.insertAdjacentHTML("beforebegin", htmlPage);
};

export const clearPage = () => {
  const element = document.getElementById(ID_PAGE);
  if (element !== null) {
    element.remove();
  }
};
