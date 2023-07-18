function previewPage() {
  let containerPage = document.getElementById("container-link-page");
  containerPage.className = "container-sm d-none";
}
function removePage () {
  let containerPlatform = document.getElementById("container-platform");
  containerPlatform.className= "container-sm d-none";
  let containerLinkPage= document.getElementById("container-profile");
  containerLinkPage.className ="container-sm d-none";
  
}

//"container-sm" when it's vosible;
//"container-sm d-none" when it's invisible
function showPage(page) {
    let containerPage = document.getElementById(page);
    containerPage.className = "container-sm";
    let containerLink = document.getElementById(page);
    containerLink.className = "container-sm";
  }
  
  document.getElementById("add-link").onclick = function() { showPage("container-platform");
  };
  document.getElementById("link-buton-page").onclick = function () {
   removePage ("container-profile");
    showPage("container-link-page");
   }
    
  
  document.getElementById("remove-button").onclick = function () {
    removePage()
  }

  document.getElementById("profile-button").onclick = function () {
    previewPage();
    showPage("container-profile");
  };

  document.getElementById("preview-button").onclick = function () {
   removePage();
  }


  