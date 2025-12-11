// window.addEventListener('load', () => {
//   const btnOpen = document.querySelector(".btn-open");
//   const btnClose = document.querySelector(".btn-close");
//   const nav = document.querySelector(".navigation");
//   const overlay = document.querySelector("#overlay");
//   const header = document.querySelector('header');
//   // const header = document.querySelector('header');
//   // btnOpen.addEventListener('click', () => header.classList.add('menu-open'));
//   // btnClose.addEventListener('click', () => header.classList.remove('menu-open'));


//   btnOpen.addEventListener("click", () => {
//     header.classList.add('menu-open')
//     nav.classList.add("active");
//     overlay.classList.add("show");
//     btnClose.classList.add("active");
//     btnOpen.classList.add("hidden");
//   });

//   btnClose.addEventListener("click", () => {
//     header.classList.remove('menu-open')
//     nav.classList.remove("active");
//     overlay.classList.remove("show");
//     btnClose.classList.remove("active");
//     btnOpen.classList.remove("hidden");
//   });

//   overlay.addEventListener("click", () => {
//     nav.classList.remove("active");
//     overlay.classList.remove("show");
//     btnClose.classList.remove("active");
//     btnOpen.classList.remove("hidden");
//   });


// })
window.addEventListener('load', () => {
  const btnOpen = document.querySelector(".btn-open");
  const btnClose = document.querySelector(".btn-close");
  const nav = document.querySelector(".navigation");
  const overlay = document.querySelector("#overlay");
  const header = document.querySelector('header');

  const openMenu = () => {
    header.classList.add('menu-open'); // jasne logo
    nav.classList.add("active");
    overlay.classList.add("show");
    btnClose.classList.add("active");
    btnOpen.classList.add("hidden");
  };

  const closeMenu = () => {
    header.classList.remove('menu-open'); // ciemne logo
    nav.classList.remove("active");
    overlay.classList.remove("show");
    btnClose.classList.remove("active");
    btnOpen.classList.remove("hidden");
  };

  btnOpen.addEventListener("click", openMenu);
  btnClose.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
});



console.log('ok')