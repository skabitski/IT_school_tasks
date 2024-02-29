// let date = new Date();
// let time = date.getHours();

// if (time < 10) {
//   alert("Доброе утро!");
// } else {
//   alert("Добрый день!");
// }

// time < 10 ? alert("Доброе утро!") : alert("Добрый день!");

let whiteC = document.getElementById("white");
let orangeC = document.getElementById("orange");
let grayC = document.getElementById("gray");
let selectColor = document.getElementById("mySelect");
let divColors = document.getElementById("divcolor");

function colorChange() {
  let selectedColor = selectColor.value;
  if (selectedColor === "option1") {
    divColors.style.background = "white";
  } else if(selectedColor ==="option2"){
    divColors.style.background ="orange"
  }
  else if(selectedColor ==="option3"){
    divColors.style.background ="gray"
  }
}
selectColor.addEventListener("change", colorChange);

