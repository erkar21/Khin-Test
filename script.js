const box = document.querySelector(".box");
const question = document.querySelector(".question");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

const boxRect = box.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I Love You Too...Ma Khin Thu <3";
});

noBtn.addEventListener("mouseover", () => {
  const i = Math.floor(Math.random() * (boxRect.width - noBtnRect.width)) + 1;
  const j = Math.floor(Math.random() * (boxRect.height - noBtnRect.height)) + 1;

  noBtn.style.left = i + "px";
  noBtn.style.top = j + "px";
});
