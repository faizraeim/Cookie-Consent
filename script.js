const close = document.querySelector("#close");
const box = document.querySelector(".box");
const accept = document.querySelector(".btm button");

// Check if consent is already given
if (localStorage.getItem("cookieConsent") === "true") {
  box.style.display = "none";
}

close.addEventListener("click", function () {
  box.style.display = "none";
});

accept.addEventListener("click", function () {
  box.style.display = "none";
  localStorage.setItem("cookieConsent", "true");
});