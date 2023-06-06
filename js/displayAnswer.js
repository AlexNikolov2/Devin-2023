const button = document.querySelectorAll(".arrow");
const answer = document.querySelectorAll(".answer");

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener("click", () => {
    if (answer[i].style.display === "none") {
      answer[i].style.display = "block";
    } else {
      answer[i].style.display = "none";
    }
  });
}
