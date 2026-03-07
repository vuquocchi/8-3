var to = actionName;
var gift_image_url = giftImage || giftImageBase64;

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");

function init() {
  var graphElem = document.querySelector(".present-box > .side.top .to");
  graphElem.setAttribute("data-before", eventName);
  document.querySelector(
    "#card .title-card"
  ).innerHTML = `🌹 <span class="fullname">${titleCard}</span> 🌹`;
  document.querySelector("#card .content-card").innerHTML = `${contentCard}`;
  document.querySelector("#card .avatar").setAttribute("src", `${cardImage}`);

  var _giftLink, _giftImg;

  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if (_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }

  present.addEventListener(
    "click",
    function (e) {
      present.classList.toggle("open");
      document.getElementById("above-fold").classList.add("above-fold-hidden");
      document.getElementById("card").classList.add("card-show");
      // setTimeout(function () {
      //   document
      //     .getElementById("above-fold")
      //     .classList.add("above-fold-hidden");
      // }, 2000);
    },
    false
  );

  nametag.innerText = to;
}

init();
