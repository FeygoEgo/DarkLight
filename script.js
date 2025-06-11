document.addEventListener("DOMContentLoaded", () => {
  const jerseyImage = document.querySelector("img");
  jerseyImage.addEventListener("click", () => {
    alert("You clicked on the jersey! Zoom feature coming soon.");
  });

  const backLink = document.querySelector(".back-link");
  backLink.addEventListener("click", (e) => {
    const confirmBack = confirm("Are you sure you want to return to the catalogue?");
    if (!confirmBack) {
      e.preventDefault(); 
    }
  });

});






