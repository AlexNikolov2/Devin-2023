const navbar = document.getElementById("navbar");
const links = document.getElementById("links");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  if (navbar.style.display === "flex") {
    links.style.display = "none";
  } else {
    links.style.display = "flex";
    links.style.flexDirection = "column";
    navbar.style.flexDirection = "column";
  }
});
