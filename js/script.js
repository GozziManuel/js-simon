const randomNumber = Math.floor(Math.random() * 50 + 1);
let countDownStart = 5;
const countDown = document.getElementById("countdown");
const istruzioni = document.getElementById("instructions");
const inputList = document.getElementById("answers-form");

// const counter = setInterval(() => {
//   countDownStart--;
//   countDown.innerHTML = `<p>${countDownStart}</p>`;
//   if (countDownStart === 0) {
//     clearInterval(counter);
//     countDown.style.display = "none";
//     istruzioni.style.display = "none";
//     inputList.classList.remove("d-none");
//   }
// }, 1000);
