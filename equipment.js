/**
 * @description Change Home page slider's arrows active status
 */
const cardContainer = document.getElementById("equipent-card-content");
const cardEquipmentList = [
  { equipment_content: "Made in SS 304 / 316 / 316L With Interlocking door system at time only one door will open Soft touch LED Controller for display In Build hour meter with UV Light and Florescent light.",image: "assets/images/static_passbox.png",equipment_name: "Static PassBox"},
  { equipment_content: "Made in SS 304 / 316 / 316L with Interlocking door system at time only one door will open magnehelic differential pressure gauge Double Shaft Motor Blower ,1/16 H.P, 2800 R.P.M, 230 volt, 1 Phase Hepa Filter 0.3 micron, Fine Filter 5 micron sandwich type Door With Clear Glass View panel 5 mm thick glass coving On Bottom for easy cleaning.",image: "assets/images/dyanamic_passbox.png",equipment_name: "Dynamic PassBox"},
  { equipment_content: "Made in SS 304 / 316 / 316L hepa Filter 0.3 micron, Fine Filter 5 micron double Shaft Motor Blower, 1.0/0.5 H.P, 2800 R.P.M, 230 volt, 1 Phase magnehlic Gauge 0‐25 mm polycarbonate Glass Front Sash Manual Opening Close Arrangement with manual locking Systems electrical Supply 230V AC 1‐Phase",image: "assets/images/vertical_laminar_airflow.png",equipment_name: "Vertical Laminar Air Flow"},
  { equipment_content: "Made in SS 304 / 316 / 316L hepa Filter 0.3 micron, Fine Filter 0.3 Micron, Fine Filter 5 micron double Shaft Motor Blower, 1.0/0.5 H.P, 2800 R.P.M, 230 volt, 1 Phase font Door Toughen Glass View Panel UPS Inverter with battery Backup 2 hrs roma Switch Socket modular Plate with on/off Switches for Motor & Light caster Wheel SS 304 Bracket with PU Wheel (4 x 1 inch ) electrical Supply 230V AC 1‐Phase",image: "assets/images/mobile_laminar_airflow.png",equipment_name: "Mobile Laminar Air Flow"},
  { equipment_content: "Made in SS 304 / 316 / 316L hepa Filter 0.3 micron, Exhaust Hepa Filter 0.3 Micron, Fine Filter 5 micron, Pre filter 10 micron double Shaft Motor Blower, 1.0/0.5 H.P, 2800 R.P.M, 230 volt, 1 Phase SS Filter Clamps (SS 304) feather Touch ON/OFF Switch For Fluorescent light & Motor ON/OFF Switch Socket 16 Amp, 230 V electrical Supply 230V AC 1‐Phase",image: "assets/images/reverse_laminar_airflow.png",equipment_name: "Reverse Laminar Air Flow"},
  { equipment_content: "AIRSHOWER made in SS 04 / 316 / 316L hepa Filter 0.3 micron, Exhaust Hepa Filter 0.3 Micron, Fine Filter 5 micron, Pre filter 10 micron double Shaft Motor Blower, 1.0/0.5 H.P, 2800 R.P.M, 230 volt, 1 Phase SS Filter Clamps (SS 304) feather Touch ON/OFF Switch For Fluorescent light & Motor ON/OFF Switch Socket 16 Amp, 230 V electrical Supply 230V AC 1‐Phase",image: "assets/images/airshower.png",equipment_name: "Airshower"},
  { equipment_content: "Made in SS 304 / 316 / 316L control System Feather Touch ON/OFF Push Button for Fluorescent light ,UV Light & Motor blower with Digital Hour Meter hepa Filter 0.3 micron, Exhaust Hepa Filter 0.3 micron, Fine Filter 5 micron Flange Type, Moc : Aluminium double Shaft Motor Blower, 1.0/0.5 H.P, 2800 R.P.M, 230 volt, 1 Phase magnehlic Gauge 0‐25 mm vertical Sliding Front Door Toughen Glass 8 mm Thick with Motorized door Up down Arrangement clear view Toughen Glass in Side Wall ‐ 5 mm thick glass electrical Supply 230V AC 1‐Phase.",image: "assets/images/biologfical_safety.png",equipment_name: "Biosafety Cabinet"},
  { equipment_content: "Made in SS 304 / 316 / 316L hepa Filter 0.3 micron, Fine Filter 5 micron double Shaft Motor Blower, 1.0/0.5 H.P, 2800 R.P.M, 230 volt, 1 Phase magnehlic Gauge 0‐25 mm SS 304 DOP Port for PAO test Perforated Shelf in Internal Area or SS hanger Arrangement SS Handle for Door UV Light 5‐18 watt with hour mete Electrical Supply 230V AC 1‐Phase.",image: "assets/images/static_passbox.png",equipment_name: "Sterile Garment Storage Cabinet"},
  // { equipment_content: "",image: "assets/images/static_passbox.png",equipment_name: "Static PassBox"},
];

cardEquipmentList.forEach(cardData => {
  const cardViewHtml = createCardView(cardData);
  cardContainer.insertAdjacentHTML("beforeend", cardViewHtml);
});


function createCardView(cardData) {
  return `
  <div class="card">
  <img src=${cardData.image} alt="Animals">
  <div class="container">
    <h4>
      <b>${cardData.equipment_name}</b>
    </h4>
    <p>
    ${cardData.equipment_content}

    </p>
  </div>
</div>
    `;
}

function updateSliderArrowsStatus(
    cardsContainer,
    containerWidth,
    cardCount,
    cardWidth
  ) {
    if (
      $(cardsContainer).scrollLeft() + containerWidth <
      cardCount * cardWidth + 15
    ) {
      $("#slide-right-container").addClass("active");
    } else {
      $("#slide-right-container").removeClass("active");
    }
    if ($(cardsContainer).scrollLeft() > 0) {
      $("#slide-left-container").addClass("active");
    } else {
      $("#slide-left-container").removeClass("active");
    }
  }
  $(function() {
    // Scroll products' slider left/right
    let div = $("#cards-container");
    let cardCount = $(div)
      .find(".cards")
      .children(".card").length;
    let speed = 1000;
    let containerWidth = $(".container").width();
    let cardWidth = 250; 
    var x = window.matchMedia("(max-width: 1260px)");
    // var y = window.matchMedia("(max-width: 850px)");
    if (x.matches) { // If media query matches
      cardWidth = 600; 
      console.log(cardWidth);
   } 
   
  
    updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
  
    //Remove scrollbars
    $("#slide-right-container").click(function(e) {
      if ($(div).scrollLeft() + containerWidth < cardCount * cardWidth) {
        $(div).animate(
          {
            scrollLeft: $(div).scrollLeft() + cardWidth
          },
          {
            duration: speed,
            complete: function() {
              setTimeout(
                updateSliderArrowsStatus(
                  div,
                  containerWidth,
                  cardCount,
                  cardWidth
                ),
                1005
              );
            }
          }
        );
      }
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    });
    $("#slide-left-container").click(function(e) {
      if ($(div).scrollLeft() + containerWidth > containerWidth) {
        $(div).animate(
          {
            scrollLeft: "-=" + cardWidth
          },
          {
            duration: speed,
            complete: function() {
              setTimeout(
                updateSliderArrowsStatus(
                  div,
                  containerWidth,
                  cardCount,
                  cardWidth
                ),
                1005
              );
            }
          }
        );
      }
      updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
    });
  
    // If resize action ocurred then update the container width value
    $(window).resize(function() {
      try {
        containerWidth = $("#cards-container").width();
        updateSliderArrowsStatus(div, containerWidth, cardCount, cardWidth);
      } catch (error) {
        console.log(
          `Error occured while trying to get updated slider container width: 
              ${error}`
        );
      }
    });
  });


