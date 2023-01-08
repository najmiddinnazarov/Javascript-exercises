// No1
const elKv = document.querySelector(".kvadrat");
const elBall = document.querySelector(".kvadrat img");

elKv.addEventListener("click", (e) => {
  elBall.style.left = `${e.offsetX - 25}px`;
  elBall.style.top = `${e.offsetY - 25}px`;
});

// No2
const elMenuImg = document.querySelector(".menu-img img");
const elMenuTitle = document.querySelector(".menu-title");
const elMenuList = document.querySelector(".menu ul");
elMenuTitle.addEventListener("click", () => {
  // elMenuImg.style.transform = "rotate(90deg)";
  if (elMenuImg.style.transform != "rotate(90deg)") {
    elMenuImg.style.transform = "rotate(90deg)";
    elMenuList.style.opacity = 1;
  } else {
    elMenuImg.style.transform = "rotate(0deg)";
    elMenuList.style.opacity = 0;
  }
});

// No3
const elWrap = document.querySelector(".wrapper");
const elCard = document.querySelectorAll(".card");
const elCardClose = document.querySelectorAll(".card-close");
elCardClose.forEach((cl) => {
  cl.addEventListener("click", () => {
    elCard.forEach((card) => {
      card.remove();
    });
  });
});
// Error
