const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const nav = document.querySelector(".navigation");
const overlay = document.querySelector("#overlay");

btnOpen.addEventListener("click", () => {
  nav.classList.add("active");
  overlay.classList.add("show");
  btnClose.classList.add("active");
  btnOpen.classList.add("hidden");
});

btnClose.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("show");
  btnClose.classList.remove("active");
  btnOpen.classList.remove("hidden");
});

overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("show");
  btnClose.classList.remove("active");
  btnOpen.classList.remove("hidden");
});

