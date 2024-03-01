// function aPlus() {
//     let a = prompt(`Введите число`);
//     let b = prompt(`Введите число`);
//     alert(`${a} + ${b} = ${Number(a) + Number(b)}`);
// }

let resultPlus = document.getElementById("res_plus");
let plusIngA = document.getElementById("inp_plus_a");
let plusIngB = document.getElementById("iфnp_plus_b");

let resultMinus = document.getElementById("res_del");
let minusA = document.getElementById("inp_del_a");
let minusB = document.getElementById("inp_del_b");

let sumPlus = () => {
  let a = parseFloat(plusIngA.value);
  let b = parseFloat(plusIngB.value);

  let result = a + b;
  console.log(result);

  resultPlus.textContent = result;
};

let sumDel = () => {
  let a = parseFloat(minusA.value);
  let b = parseFloat(minusB.value);

  if (b === Number(0)) {
    alert("NA NOL DELIT NELZA");
    return;
  }
  let result = a / b;
  console.log(result);
  resultMinus.textContent = result;
  
};

function divColor() {
  let resultPlus = document.getElementById("res_plus");
  let currentColor = resultPlus.style.color;
  if (currentColor === "red") {
    resultPlus.style.color = "";
  } else {
    resultPlus.style.color = "red";
  }
}

let btnLeft = document.getElementById("btn_lft");
let btnRight = document.getElementById("btn_rgt");
let photoMe = document.getElementById("me");

let currentIndex = 0;

let images = [
  "images/photo_2024-02-27_10-53-32.jpg",
  "images/photo_2024-02-27_10-58-16.jpg",
];

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  } else if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  let currentImage = document.getElementById("me");
  currentImage.src = images[currentIndex];
}
