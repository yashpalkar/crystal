// navbar menu ========================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".navbar")

const toggleNavbr = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbr());





var clickhere=document.querySelector(".Click-here");
const custommodelmain=document.getElementById("custom-model-main");


clickhere.addEventListener('click',()=>{
    console.log(custommodelmain);
    custommodelmain.classList.add('model-open');
})
  var closebtn=document.querySelector(".close-btn");

  closebtn.addEventListener('click',()=>{
    custommodelmain.classList.remove('model-open');
})






















