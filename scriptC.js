// Establece la fecha del cumpleaños
const year = new Date().getFullYear();
const birthday = new Date(year, 6, 20, 20, 35, 0).getTime(); // 20 de julio a las 15:30:45
const birthdayNextYear = new Date(year + 1, 6, 20, 15, 30, 45).getTime();
const month = new Date().getMonth();

// countdown
let timer = setInterval(function() {

  // Obtén la fecha de hoy
  const today = new Date().getTime();

  // Obtén la diferencia
  let diff;
  if (month > 6 || (month === 6 && new Date().getDate() > 20)) {
    diff = birthdayNextYear - today;
  } else {
    diff = birthday - today;
  }

  // Cálculos de tiempo
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // Mostrar resultados
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";

  // Redirige a otra página cuando el contador llegue a cero
  if (diff < 0) {
    clearInterval(timer);
    window.location.href = 'content.html';
  }

}, 1000);
