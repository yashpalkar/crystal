// navbar menu ========================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".navbar")

const toggleNavbr = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbr());






























// product js========================================
function productPopup() {
    document.querySelector(".productContainer").classList.toggle("active");
}

function closeBtn() {
    document.querySelector(".productContainer").classList.toggle("productContainer");
  }


