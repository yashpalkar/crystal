// navbar menu ========================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".navbar")

const toggleNavbr = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbr());



var product_cnt=[
    {
        product_title:"RAPID MIXER GRANULATOR (RMG)",content_txt:"RMG is designed to accomplish excellent blending and reliable granules. RMG is developed for mixing of ingredient as well as wet granulation required for tablet/capsule manufacturing.A high speed granulator is located so as to assist blending of powder and to break the product to granule of required size. Tangential blade assembly with inclined profile for mass movement and better mixing. Reduction of material size for drying is achieved by inline co-mill. Lifting and positioning device can be provided to transfer the material." ,
    product_img:"assets/images/rmg.png"}
];


var clickhere=document.querySelector(".Click-here");
const custommodelmain=document.getElementById("custom-model-main");
const product_title=document.getElementById("product-title");

clickhere.addEventListener('click',()=>{
    // console.log(custommodelmain);
    custommodelmain.classList.add('model-open');
    product_title.innerHTML=product_cnt[0].product_title;
    console.log(product_title);
})
  var closebtn=document.querySelector(".close-btn");

  closebtn.addEventListener('click',()=>{
    custommodelmain.classList.remove('model-open');
})

// function showpopup




















