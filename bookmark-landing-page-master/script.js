
window.addEventListener('load', () => {
  const btnOpen = document.querySelector(".btn-open");
  const btnClose = document.querySelector(".btn-close");
  const nav = document.querySelector(".navigation");
  const overlay = document.querySelector("#overlay");
  const header = document.querySelector('header');
  const menuLinks = document.querySelectorAll('.menu-link');

  const openMenu = () => {
    header.classList.add('menu-open');
    nav.classList.add("active");
    overlay.classList.add("show");
    btnClose.classList.add("active");
    btnOpen.classList.add("hidden");
  };

  const closeMenu = () => {
    header.classList.remove('menu-open');
    nav.classList.remove("active");
    overlay.classList.remove("show");
    btnClose.classList.remove("active");
    btnOpen.classList.remove("hidden");
  };

  btnOpen.addEventListener("click", openMenu);
  btnClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});

const tabs = document.querySelectorAll('[role="tab"]');
const panels = document.querySelectorAll('[role="tabpanel"]');

const form = document.querySelector(".cta-form");
const field = document.querySelector(".form-field");
const input = document.querySelector(".cta-input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailValue = input.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    field.classList.add("error");

    input.value = "";
    input.placeholder = "example@email/com";
  } else {
    field.classList.remove("error");

    console.log("Email OK:", emailValue);
  }
});
input.addEventListener("input", () => {
  field.classList.remove("error");
  input.placeholder = "Enter your email address";
});




tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const tabNumber = tab.dataset.tab;

    tabs.forEach(t => {
      t.classList.remove("active");
      t.setAttribute("aria-selected", "false");
    });

    panels.forEach(panel => panel.classList.remove("active"));

    tab.classList.add("active");
    tab.setAttribute("aria-selected", "true");

    document
      .querySelector(`[data-panel="${tabNumber}"]`)
      .classList.add("active");
  });
});




console.log('ok')