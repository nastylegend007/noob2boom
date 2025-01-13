// Function to toggle the side menu visibility
function toggleMenu() {
  var menu = document.getElementById("sideMenu");
  menu.classList.toggle("active"); // Toggle the 'active' class to show/hide the menu
}

// Add scroll listener to trigger the scroll-move class
window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;
  const container = document.querySelector(".container");
  const dividerSection = document.querySelector(".divider-section");

  console.log("Scroll Position:", scrollPos); // Debugging line
  

  if (scrollPos > 1) {
      container.classList.add("scroll-move");
      dividerSection.classList.add("scroll-move");
  } else {
      container.classList.remove("scroll-move");
      dividerSection.classList.remove("scroll-move");
  }
});