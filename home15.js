let date = new Date();
let time = date.getHours();

if (time < 10) {
  alert("Доброе утро!");
} else {
  alert("Добрый день!");
}

time < 10 ? alert("Доброе утро!") : alert("Добрый день!");


