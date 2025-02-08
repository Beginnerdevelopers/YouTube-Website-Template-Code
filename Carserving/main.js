const menuBtn=document.getElementById("menu-btn")
const menuBtnIcon=menuBtn.querySelector("i")
const navLinks=document.getElementById("nav-links")
menuBtn.addEventListener("click",()=>{
  navLinks.classList.toggle("open")

  const isOpen=navLinks.classList.contains("open")
  menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line":"ri-menu-3-line")
})
navLinks.addEventListener("click",()=>{
  navLinks.classList.remove("open")
  menuBtnIcon.setAttribute("class","ri-menu-3-line")
})

const scrollRevealOptions={
  distance:"50px",
  orgin:"bottom",
  duration:1000,

}

ScrollReveal().reveal(".header_content h1",{
  ...scrollRevealOptions,
})
ScrollReveal().reveal(".service__card",{
  ...scrollRevealOptions,
})
ScrollReveal().reveal(".price__card",{
  ...scrollRevealOptions,
})
ScrollReveal().reveal(".header_btn",{
  ...scrollRevealOptions,
  interval:500,
})
const swiper = new Swiper(".swiper",{
  loop:true,
  pagination:{
    el:".swiper-pagination",
  }
})