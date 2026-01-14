let countDownStart = 2;
const countDown = document.getElementById("countdown");
const istruzioni = document.getElementById("instructions");
const inputList = document.getElementById("answers-form");
const numberlist = document.getElementById("numbers-list");
const input = document.getElementsByClassName("form-control");

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
    numberlist.classList.add("d-none");
  }
}, 1000);
inputList.addEventListener("submit", function (e) {
  e.preventDefault();
  const classValue = input.value;
  console.log(classValue);
});
