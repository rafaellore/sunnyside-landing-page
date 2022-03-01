// Animation
if (window.SimpleAnime) {
  new SimpleAnime();
}

const mobileBtn = document.querySelector(".hamburger");

console.log(mobileBtn);
function handleMobileNavigation() {
  const mobileNav = document.querySelector(".nav-mobile");
  const h1 = document.querySelector(".header-bg h1");
  const arrow = document.querySelector(".arrow");

  mobileNav.classList.toggle("active");
  h1.classList.toggle("hidden");
  arrow.classList.toggle("hidden");
}

mobileBtn.addEventListener("click", handleMobileNavigation);
