// Wait for the DOM to load before running any script
document.addEventListener("DOMContentLoaded", () => {
  // 1. Image click alert
  const jerseyImage = document.querySelector("img");
  jerseyImage.addEventListener("click", () => {
    alert("You clicked on the jersey!");
  });

  // 2. Back link confirmation
  const backLink = document.querySelector(".back-link");
  backLink.addEventListener("click", (e) => {
    const confirmBack = confirm("Are you sure you want to return to the catalogue?");
    if (!confirmBack) {
      e.preventDefault(); // Cancel the default link behavior
    }
  });

  // 3. (Optional) Dark Mode toggle if you add a button with id="toggle-theme"
  const toggleBtn = document.getElementById("toggle-theme");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }
});
