const adviceNum = document.querySelector("#advice-num");
const advice = document.querySelector("#advice");
let adviceBtn = document.querySelector("#advice-btn");

function randomAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      // console.log(data);
      adviceNum.textContent = `Advice #${data.id}`;
      advice.textContent = `"${data.advice}"`;
    });
}

adviceBtn.addEventListener("click", randomAdvice);
