let countDownStart = 2;
const countDown = document.getElementById("countdown");
const istruzioni = document.getElementById("instructions");
const inputList = document.getElementById("answers-form");
const numberlist = document.getElementById("numbers-list");
const message = document.getElementById("message");
const numbers = [];

function numberGenerator(quantity, min, max) {
  for (let i = 0; i < quantity; i++) {
    const randomNumber = Math.floor(Math.random() * max + min);
    numbers.push(randomNumber);
  }
  numberlist.innerHTML = `<li>${numbers.join("-")}</li>`;
  console.log(numbers);
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
  const userNumbers = [];

  const number1 = parseInt(document.getElementById("number1").value);
  const number2 = parseInt(document.getElementById("number2").value);
  const number3 = parseInt(document.getElementById("number3").value);
  const number4 = parseInt(document.getElementById("number4").value);
  const number5 = parseInt(document.getElementById("number5").value);
  userNumbers.push(number1, number2, number3, number4, number5);
  console.log(userNumbers);
  const validator = userNumbers.every(function (element) {
    return numbers.indexOf(element) >= 0;
  });
  console.log(validator);
  if (validator == true) {
    message.innerText = "hai vinto bravo!";
  } else {
    message.innerText = "hai perso riprova!";
  }
});
