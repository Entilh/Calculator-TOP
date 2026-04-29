const screen = document.querySelector(".screen");
const screenHistory = document.querySelector(".screenHistory");
const screenCurrent = document.querySelector(".screenCurrent");

const btnNumber = document.querySelectorAll(".btn-number");
const btnOperator = document.querySelectorAll(".btn-operator");
const btnCorrection = document.querySelectorAll(".btn-correction");
const btnEqual = document.querySelector(".btn-equal");

const btnAC = document.querySelector(".btn-AC");
const btnDEL = document.querySelector(".btn-DEL");
const btnPercent = document.querySelector(".btn-Percent");

let firstVariable = "";
let secondVariable = "";
let operator = "";
let lastButton = "";

function appendNumber(nbr) {
  screenCurrent.textContent += nbr;
}

function setOperator(op) {
  if (firstVariable === "") {
    firstVariable = screenCurrent.textContent;
  } else {
    secondVariable = screenCurrent.textContent;
    firstVariable = calculate(firstVariable, secondVariable, operator);
  }
  operator = op;
  screenHistory.textContent = firstVariable + " " + operator;
  screenCurrent.textContent = "";
}

btnNumber.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (lastButton === "equal") {
      reset();
    }
    appendNumber(btn.textContent);
    lastButton = "";
  });
});

btnOperator.forEach((btn) => {
  btn.addEventListener("click", () => {
    setOperator(btn.textContent);
  });
});

function calculate(firstNbr, sndNbr, op) {
  let result;
  if (op === "+") {
    result = Number(firstNbr) + Number(sndNbr);
  } else if (op === "-") {
    result = Number(firstNbr) - Number(sndNbr);
  } else if (op === "x") {
    result = Number(firstNbr) * Number(sndNbr);
  } else if (op === "/") {
    result = Number(firstNbr) / Number(sndNbr);
  }
  return result;
}

btnEqual.addEventListener("click", () => {
  secondVariable = screenCurrent.textContent;
  screenCurrent.textContent = calculate(
    firstVariable,
    secondVariable,
    operator,
  );
  screenHistory.textContent =
    firstVariable + " " + operator + " " + secondVariable;
  lastButton = "equal";
});

function reset() {
  firstVariable = "";
  secondVariable = "";
  operator = "";
  screenCurrent.textContent = "";
  screenHistory.textContent = "";
}

btnAC.addEventListener("click", () => {
  reset();
});

btnDEL.addEventListener("click", () => {
  if (lastButton === "equal") {
    reset();
  } else {
    screenCurrent.textContent = screenCurrent.textContent.slice(0, -1);
    lastButton = "";
  }
});

btnPercent.addEventListener("click", () => {
  screenCurrent.textContent = Number(screenCurrent.textContent) / 100;
});
