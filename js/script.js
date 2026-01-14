let countDownStart = 5;
const countDown = document.getElementById("countdown");
const istruzioni = document.getElementById("instructions");
const inputList = document.getElementById("answers-form");
const numberlist = document.getElementById("numbers-list");

function numberGenerator(quantity, min, max) {
  const numbers = [];
  for (let i = 0; i < quantity; i++) {
    const randomNumber = Math.floor(Math.random() * max + min);
    numbers.push(randomNumber);
  }
  numberlist.innerHTML = `<li>${numbers.join("-")}</li>`;
  return numbers;
}
numberGenerator(5, 1, 50);

const counter = setInterval(() => {
  countDownStart--;
  countDown.innerHTML = `<p>${countDownStart}</p>`;
  if (countDownStart === 0) {
    clearInterval(counter);
    countDown.style.display = "none";
    istruzioni.style.display = "none";
    inputList.classList.remove("d-none");
  }
}, 1000);
