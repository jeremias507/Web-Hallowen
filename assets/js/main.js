const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
} if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

let navLink = document.querySelectorAll(".nav__link");
navLink.forEach((item)=>{
  item.addEventListener("click",()=>{
    navMenu.classList.remove("show-menu")
  })
})


// SWIPER
let homeSwiper = new Swiper(".home-swiper", {
  spaceBetween: 30,
  loop: "true",
  pagination: {
    el: '.swiper-pagination',
    clickable: "true"
  },
})

let newSwiper = new Swiper(".new-swiper", {
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 16,
})


// Scroll up 
const scrollup = document.getElementById("scroll-up");

window.addEventListener("scroll",()=>{
  if(window.scrollY >= 500){
    scrollup.classList.add("show-scroll")
  }else{
    scrollup.classList.remove("show-scroll")
  }
})

// Section active



// scroll reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  // delay:300,
  reset: true
})



sr.reveal(`.home-swiper,.new-swiper,.newsletter__container`)
sr.reveal(`.category__data,.trick__content,.footer__content`, { interval: 100 })
sr.reveal(`.about__data,.discount__img`, { origin: "left" })
sr.reveal(`.about__img,.discount__data`, { origin: "right" })