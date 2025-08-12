// header
const btnOpen = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const nav = document.querySelector('.navigation');
const overlay = document.querySelector('.overlay');


btnOpen.addEventListener('click', () => {
  nav.classList.add('navigation-open');
  overlay.classList.add('overlay-show');
});

btnClose.addEventListener('click', () => {
  nav.classList.remove('navigation-open')
  overlay.classList.remove('overlay-show');
})

console.log('ok')

// carousel
const track = document.querySelector(".carousel-track");
const slides = [...document.querySelectorAll(".carousel-slide")];
const nextBtn = document.querySelector(".carousel-btn.next");
const prevBtn = document.querySelector(".carousel-btn.prev");
let currentInd = 0;

function updateSlidePosition() {
  const slideWidth = slides[0].clientWidth;
  track.style.transform = `translateX(-${slideWidth * currentInd}px)`;
}

function goToNextSlide() {
  if (currentInd < slides.length - 1) {
    currentInd++;
    updateSlidePosition();
  }
}

function goToPrevSlide() {
  if (currentInd > 0) {
    currentInd--;
    updateSlidePosition();
  }
}

nextBtn.addEventListener("click", goToNextSlide);
prevBtn.addEventListener("click", goToPrevSlide);



// dropdown
const cartDropdown = document.querySelector('.cart-dropdown');
const btnCart = document.querySelector('.btn-cart');
const cartCount = document.querySelector('.cart-count');
const cartEmpty = document.querySelector('.cart-empty');
const cartFilled = document.querySelector('.cart-filled');
const cartItemPrice = document.querySelector('.cart-item-price');
const deleteBtn = document.querySelector('.cart-item-delete');

const decreaseBtn = document.querySelector('.btn-decrease');
const increaseBtn = document.querySelector('.btn-increase');
const quantityValue = document.querySelector('.quantity-value');
const addBtn = document.querySelector('.btn-add');

const DISCOUNT_PRICE = 125;
let quantity = 0;
let cartQuantity = 0;

function updateAddBtn() {
  addBtn.disabled = quantity === 0;
}
updateAddBtn();

increaseBtn.addEventListener('click', () => {
  quantity++;
  quantityValue.textContent = quantity;
  updateAddBtn();
});

decreaseBtn.addEventListener('click', () => {
  if (quantity > 0) {
    quantity--;
    quantityValue.textContent = quantity;
    updateAddBtn();
  }
});

addBtn.addEventListener('click', () => {
  if (quantity === 0) return;

  cartQuantity = quantity;
  quantity = 0;
  quantityValue.textContent = 0;

  updateCartUI();
  cartDropdown.classList.add('visible');
  updateAddBtn();
});

btnCart.addEventListener('click', () => {
  cartDropdown.classList.toggle('visible');
  updateCartUI();

});

deleteBtn.addEventListener('click', () => {
  cartQuantity = 0;
  updateCartUI();
  updateAddBtn();
});

function updateCartUI() {
  if (cartQuantity === 0) {
    cartDropdown.classList.add('empty');
    cartDropdown.classList.remove('filled');
    cartCount.classList.remove('visible');
    cartCount.textContent = '';
  } else {
    cartDropdown.classList.remove('empty');
    cartDropdown.classList.add('filled');
    cartCount.classList.add('visible');
    cartCount.textContent = cartQuantity;

    const totalPrice = DISCOUNT_PRICE * cartQuantity;
    cartItemPrice.innerHTML = `$${DISCOUNT_PRICE.toFixed(2)} × ${cartQuantity} <strong class="strong-price">$${totalPrice.toFixed(2)}</strong>`;
  }
}

// lightbox
const lightbox = document.querySelector('.lightbox');
const largeImg = document.querySelector('.lightbox-slide');

const lightThumb = document.querySelectorAll('.thumb')
let currentIndex = 0;

lightThumb.forEach((el) => {
  el.addEventListener('click', () => {
    currentIndex = parseInt(el.dataset.index);
    lightbox.classList.remove('hidden');
    updateLightboxImage();
  });
});

function updateLightboxImage() {
  largeImg.classList.remove('show');

  const newSrc = `images/image-product-${currentIndex + 1}.jpg`;
  largeImg.src = newSrc;
  largeImg.alt = `Product ${currentIndex + 1}`;

  largeImg.onload = () => {
    largeImg.classList.add('show');
  };

  lightThumb.forEach(t => t.classList.remove('active'));
  lightThumb[currentIndex].classList.add('active');

  prevBtnLig.disabled = currentIndex === 0;
  nextBtnLig.disabled = currentIndex === lightThumb.length - 1;
}

const prevBtnLig = document.querySelector('.lightbox-btn.prev');
const nextBtnLig = document.querySelector('.lightbox-btn.next');


prevBtnLig.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateLightboxImage();
  }
});

nextBtnLig.addEventListener('click', () => {
  if (currentIndex < lightThumb.length - 1) {
    currentIndex++;
    updateLightboxImage();
  }
});

const closeBtn = document.querySelector('.lightbox-close');

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

const lightboxThumbs = document.querySelectorAll('.light-thumb');

lightboxThumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    currentIndex = parseInt(thumb.dataset.index);
    updateLightboxImage();
  })
})
const lightboxOverlay = document.querySelector('.lightbox-overlay');

lightboxOverlay.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});



// keyboard
document.addEventListener('keydown', (e) => {
  if (lightbox.classList.contains('hidden')) return;

  if (e.key === 'Escape') {
    lightbox.classList.add('hidden');
  } else if (e.key === 'ArrowRight') {
    if (currentIndex < lightThumb.length - 1) {
      currentIndex++;
      updateLightboxImage();
    }
  } else if (e.key === 'ArrowLeft') {
    if (currentIndex > 0) {
      currentIndex--;
      updateLightboxImage();
    }
  }
});