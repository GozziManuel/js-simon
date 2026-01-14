const randomNumber = Math.floor(Math.random() * 50 + 1);
let countDownStart = 5;
const countDown = document.getElementById("countdown");

setInterval(() => {
  countDownStart--;
  countDown.innerHTML = `<p>${countDownStart}</p>`;
  if (countDownStart === 0) {
  }
}, 1000);
