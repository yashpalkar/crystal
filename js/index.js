// navbar menu ========================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector("header");

const toggleNavbr = () => {
  nav_header.classList.toggle("active");
};

nav_header.addEventListener("click", () => toggleNavbr());


// navbar logo

function showLogo() {
  document.querySelector(".nav-brand").style.display = "block";
  document.querySelector(".navbar-brand").style.display = "none";
  document.querySelector(".addAndMail").style.width = "100%";
  // document.querySelector(".mailUs p").style.display = "flex";
  // document.querySelector(".mailUs p").style.flexWrap = "wrap";
  document.querySelector(".addAndMail").style.justifyContent = "center";
  document.querySelector(".headerBottom").style.padding = "0";
  document.querySelector(".headerTop").style.padding = "0";
  document.querySelector(".address p").style.fontSize = "12px";
  document.querySelector(".mailUs p").style.fontSize = "12px";
}

// navbar end menu ========================================

var product_cnt = [
  {
    product_title: "RAPID MIXER GRANULATOR (RMG)", content_txt: "<ul> <li>RMG is designed to accomplish excellent blending and reliable granules.</li><li> RMG is developed for mixing of ingredient as well as wet granulation required for tablet/capsule manufacturing.</li><li>A high speed granulator is located so as to assist blending of powder and to break the product to granule of required size.</li><li> Tangential blade assembly with inclined profile for mass movement and better mixing.</li><li> Reduction of material size for drying is achieved by inline co-mill.</li><li> Lifting and positioning device can be provided to transfer the material.</li></ul>",
    product_img: "assets/images/rmg.png"
  },
  {
    product_title: "Octagonal Blender", content_txt: "<ul> <li>Octagonal blender, due to its octagonal shape is designed to process larger volume of material.</li><li> Space required is less as compared to other types of blender.</li><li> The Octagonal Blender Machine gives best result for granules due to very slow speed and octagon shape of container.</li><li> Granules come from all sides due to the octagonal shape of the blender, hence requirement of blender RPM is less.</li><li> Bigger size batch at low power consumption Suitable for dry mixing of products in granule form.</li><li> Rectangular opening lid with removable baffle mounted inside.</li><li> Pneumatically actuated valves for dust free transfers.</li><li> Variant capacity model scale-up with equivalent Geometric, Kinematic &amp; Dynamicsimilarities.</li></ui>",
    product_img: "assets/images/octagonalblender.png"
  }
  ,
  {
    product_title: "Conta Blender", content_txt: "<ul><li>A suitable fencing around the cage with an entry point for the bin on detachabletrolley.</li><li> Limit switch on entry door to prevent the accidental operation of the cage.</li><li> The Charging hole with cover is provided on top with quick opening and closing arrangement with dust proof points for particle free transfer. </li><li> Butterfly valve at the bottom suitable for discharge.</li><li> Blending is done to achieve a flexible and efficient mixing process with no risk of cross contamination.</li><li> Flexible batch sizes can be blended at one time as one blender accommodates a multiple different IBCsize.</li</ul>",
    product_img: "assets/images/conta_blender.png"
  },
  {
    product_title: "Fluid Bed Dryer", content_txt: "<ul><li>Fluid bed processing involves drying, granulation and coating of particulate materials obtained from Rapid Mixer Granulator.</li><li> Heattransfer with minimal energy consumption.</li><li> Uniform processing conditions are achieved by passing hot air through a product layer under controlled velocity conditions to create a fluidized state.</li><li> The air is distributed in a swirl flow pattern within the process chamber.</li><li> Multiple bowl options are available for drying and processing.</li><li> Improved filter bag shaking assembly system with air purging operation.</li><li> Advanced WIP system with multiple dynamic wash points for thorough cleaning. Optional isolation valves provided for explosion suppression.</li></ul>",
    product_img: "assets/images/fluid_bed_dryer.png"
  },
  {
    product_title: "Comill", content_txt: "<ul><li>Comill are designed for milling process in the pharmaceutical industries.</li><li> High speed milling granulating and size reduction by rubbing process.</li><li> Uniform size reduction of wet material with cone blade with con type sieve for size reduction.</li><li> Easily changeable screens and impellers.</li><li> Mills are suitable for a wide range of applications and offer full process scalability from laboratory to pilot to production.</li></ul>",
    product_img: "assets/images/comill.png"
  },
  {
    product_title: "Lifter Machine", content_txt: "<ul><li>The machine is mainly composed of column, control panel and hydraulic lifting system.</li><li> Powder [tablet bin is the lifted with the hydraulic jack mechanism up to desired transfer height, butterfly valve given on bin control the on/off movement and rotary 180 swivel movement.</li><li> The lifting and driving system adopts driving modes such as hydraulic lifting or mechanical lifting, etc.</li><li> Anti-falling mechanism ensures the safe operation of the lifter.</li></ul>",
    product_img: "assets/images/lifter.png"
  },
  {
    product_title: "Multimill", content_txt: "<ul><li>Multimill can be used various application including wetand dry granulation, Pulverization and more.</li><li> The concept involves rotating blades with both knife and sharp edges with a validated screen size to minimize particle size in regulated manner using a variable force.</li><li> Multimill comes with belt drive or direct drive (with VFD).</li><li> Grinding and Crushing of materials into small particle is done my knife which is used to cut large particles into small particles which are formed from granules.</li><li> Multimill can be run at variety of speed ranging from 720t02800rpm.</li></ul>",
    product_img: "assets/images/multimill.png"
  },
  {
    product_title: "Vibro Sifter", content_txt: "<ul><li>Sizes available in vibro sifter from 8” to 48”.</li><li> Availability of a wide variety of screen sizes and screen types to meet the demands of many different application and processes.</li><li> High output in rotary sifter due to centrifugal action upto 1 tonnes.</li></ul>",
    product_img: "assets/images/vibrolifter.png"
  },
];


// var clickhere=document.querySelector("#popup1");
// const custommodelmain=document.getElementById("custom-model-main");
// const product_title=document.getElementById("product-title");

// clickhere.addEventListener('click',()=>{
//     // console.log(custommodelmain);
//     custommodelmain.classList.add('model-open');
//     product_title.innerHTML=product_cnt[0].product_title;
//     var clickedID = this.id;

// })
//   var closebtn=document.querySelector(".close-btn");

//   closebtn.addEventListener('click',()=>{
//     custommodelmain.classList.remove('model-open');
// })


// var clickhere=document.querySelector("#popup2");
// const custommodelmain1=document.getElementById("custom-model-main");
// const product_title1=document.getElementById("product-title");

// clickhere.addEventListener('click',()=>{
//     // console.log(custommodelmain);
//     custommodelmain.classList.add('model-open');
//     product_title.innerHTML=product_cnt[0].product_title;
//     var clickedID = this.id;
//     // console.log(this.id, this.innerHTML);
// })
//   var closebtn=document.querySelector(".close-btn");

//   closebtn.addEventListener('click',()=>{
//     custommodelmain.classList.remove('model-open');
// })


// const onClick = (event) => {
//     console.log(event.srcElement.id);
//   }
//   window.addEventListener('click', onClick);

// // function showpopup




function showpop(clicked_id) {
  const custommodelmain = document.getElementById("custom-model-main");
  const product_title = document.getElementById("product-title");
  const prod_img = document.getElementById("prod-img");
  custommodelmain.classList.add('model-open');
  const product_details = document.getElementById("product-details");
  product_title.innerHTML = product_cnt[clicked_id].product_title;
  product_details.innerHTML = product_cnt[clicked_id].content_txt;
  console.log(product_cnt[clicked_id].product_img);
  prod_img.src = product_cnt[clicked_id].product_img;


  var closebtn = document.querySelector(".close-btn");

  closebtn.addEventListener('click', () => {
    custommodelmain.classList.remove('model-open');
  })
}















