const display = document.getElementById("display");

const body = document.getElementById("body");
const headerDiv = document.getElementById("headerDiv");
const firstToggle = document.getElementById("firstToggle");
const secondToggle = document.getElementById("secondToggle");
const thirdToggle = document.getElementById("thirdToggle");
const keysBg = document.getElementById("keys");
const nonOperatorBtn = document.getElementById("BtnOperator");
const deleteBtnnn = document.getElementById("deleteBtn");
const operatorBtn = document.getElementById("opeator-btn");
const calculateBtn = document.getElementById("calculateBtn");
const reset = document.getElementById("resetBtn");
const toggleBg = document.getElementById("toggleBg");

function firstToggler() {
  firstToggle.style.display = "none";
  secondToggle.style.display = "block";
  thirdToggle.style.display = "none";
  secondToggle.style.marginLeft = "10px";
  body.style.backgroundColor = "hsl(222,26%,31%)";
  keysBg.style.backgroundColor = "hsl(224, 36%, 15%)";
  keysBg.style.color = " hsl(225, 21%, 49%)";
  keysBg.style.boxShadow = "hsl(224, 28%, 35%)";
  nonOperatorBtn.style.color = "hsl(221,14%,31%)";

  nonOperatorBtn.style.boxShadow = "hsl(28,16%,65%)";
  deleteBtnnn.style.backgroundColor = "hsl(224,28%,35%)";
  operatorBtn.style.backgroundColor = "hsl(30,25%,89%)";
  operatorBtn.style.color = "hsl(221,14%,31%)";
  reset.style.backgroundColor = "hsl(224,28%,35%)";
  reset.style.color = "white";
  display.style.backgroundColor = "hsl(224,36%,15%)";
  display.style.color = "white";
  toggleBg.style.backgroundColor = "black";
  calculateBtn.style.backgroundColor = " hsl(25, 98%, 40%)";
  calculateBtn.style.boxShadow = "hsl(25, 99%, 27%)";
}

function secondToggler() {
  firstToggle.style.display = "none";
  secondToggle.style.display = "none";
  thirdToggle.style.display = "block";
  thirdToggle.style.marginLeft = "20px";
  body.style.backgroundColor = "hsl(0, 0%, 90%)";
  headerDiv.style.color = "black";
  display.style.backgroundColor = "hsl(0, 0%, 93%)";
  display.style.color = "hsl(60, 10%, 19%)";
  keysBg.style.backgroundColor = "hsl(35, 11%, 61%)";
  keysBg.style.color = "black";
  toggleBg.style.backgroundColor = " hsl(28, 16%, 65%)";
  reset.style.backgroundColor = "hsl(185, 42%, 37%)";
  reset.style.boxShadow = "hsl(185, 58%, 25%)";
  reset.style.color = "white";
  calculateBtn.style.backgroundColor = " hsl(25, 98%, 40%)";
  deleteBtnnn.style.backgroundColor = "hsl(185,42%,37%)";
  deleteBtnnn.style.boxShadow = "hsl(185, 58%, 25%)";
  calculateBtn.style.boxShadow = "hsl(25, 99%, 27%)";
}

function thirdToggler() {
  firstToggle.style.display = "block";
  secondToggle.style.display = "none";
  thirdToggle.style.display = "none";
  // thirdToggle.style.marginLeft = "20px";
  body.style.backgroundColor = "hsl(268, 75%, 9%)";
  headerDiv.style.color = "hsl(52, 100%, 62%)";
  display.style.backgroundColor = " hsl(268, 71%, 12%)";
  display.style.color = "hsl(52, 100%, 62%)";
  keysBg.style.backgroundColor = " hsl(268, 71%, 12%)";
  keysBg.style.color = "black";
  nonOperatorBtn.style.color = "hsl(52, 100%, 62%)";
  // nonOperatorBtn.style.backgroundColor = " hsl(268, 47%, 21%)";
  // nonOperatorBtn.style.boxShadow = "0 2px 0 hsl(285, 91%, 52%)";

  toggleBg.style.backgroundColor = " hsl(28, 16%, 65%)";
  reset.style.backgroundColor = "hsl(185, 42%, 37%)";
  reset.style.boxShadow = "hsl(185, 58%, 25%)";
  reset.style.color = "white";
  calculateBtn.style.backgroundColor = " hsl(25, 98%, 40%)";
  deleteBtnnn.style.backgroundColor = "hsl(185,42%,37%)";
  deleteBtnnn.style.boxShadow = "hsl(185, 58%, 25%)";
  calculateBtn.style.boxShadow = "hsl(25, 99%, 27%)";
}

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function deleteBtn() {
  display.value = display.value.slice(0, -1);
}
