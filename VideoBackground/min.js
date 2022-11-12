//const btn = document.querySelector(".btn");
//const video = document.querySelector(".background-video");
//const fa = document.querySelector(".fa");
//const preloader = document.querySelector(".preloader");

////btn.addEventListener("click", () => {
// if (btn.classList.contains("pause")) {
//   btn.classList.remove("pause");
//   video.play();
//   fa.classList.add("fa-pause");
//   fa.classList.remove("fa-play");
//} else {
//   btn.classList.add("pause");
//   video.pause();
//  fa.classList.add("fa-play");
//  fa.classList.remove("fa-pause");
// }
//});

//window.addEventListener("load", () => {
// preloader.style.zIndex = "-2";
//});

var arr = [
  {
    state: "Texas",
    city: "Dallas",
  },
  {
    state: "Texas",
    city: "Alvarado",
  },
  {
    state: "California",
    city: "Oakland",
  },
  {
    state: "Utah",
    city: "South Lake",
  },
];

var map = {};
for (var i = 0; i < arr.length; i++) {
  var state = arr[i].state;
  var city = arr[i].city;

  if (state in map) {
    map[state].push(city);
  } else {
    map[state] = [city];
  }
}

console.log(map);
