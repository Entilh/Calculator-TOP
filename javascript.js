// import of screen + buttons
const screenHistory = document.querySelector(".screen-history");
const screenCurrent = document.querySelector(".screen-current");
const btnOperator = document.querySelectorAll(".btn-operator");
const btnEqual = document.querySelector(".btn-equal");
const btnNumber = document.querySelectorAll(".btn-number");
const btnClear = document.querySelectorAll(".btn-correction");
const btnPercent = document.querySelector(".btn-percent");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function appendNumber(number) {
  screenCurrent.textContent += number;
}

btnNumber.forEach((btn) => {
  btn.addEventListener("click", () => {
    appendNumber(btn.textContent);
  });
});

function setOperator(op) {
  if (screenCurrent.textContent === "") return;
  firstNumber = screenCurrent.textContent;
  operator = op;
  screenHistory.textContent = `${firstNumber} ${op}`;
  screenCurrent.textContent = "";
}

btnOperator.forEach((btn) => {
  btn.addEventListener("click", () => {
    setOperator(btn.textContent);
  });
});

function calculate() {
  if (firstNumber === "" || operator === "" || screenCurrent.textContent === "")
    return;

  secondNumber = screenCurrent.textContent;
  let result;

  if (operator === "+") result = Number(firstNumber) + Number(secondNumber);
  else if (operator === "-")
    result = Number(firstNumber) - Number(secondNumber);
  else if (operator === "×")
    result = Number(firstNumber) * Number(secondNumber);
  else if (operator === "÷")
    result = Number(firstNumber) / Number(secondNumber);

  screenHistory.textContent = "";
  screenCurrent.textContent = result;
  firstNumber = "";
  operator = "";
  secondNumber = "";
}

btnEqual.addEventListener("click", () => {
  calculate();
});

function clear() {
  screenCurrent.textContent = "";
  screenHistory.textContent = "";
  firstNumber = "";
  operator = "";
  secondNumber = "";
}

function deleteLast() {
  screenCurrent.textContent = screenCurrent.textContent.slice(0, -1);
}

btnClear.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "AC") clear();
    else if (btn.textContent === "DEL") deleteLast();
  });
});

btnPercent.addEventListener("click", () => {
  screenCurrent.textContent = Number(screenCurrent.textContent) / 100;
});
