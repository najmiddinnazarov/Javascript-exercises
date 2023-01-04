const elBody = document.querySelector("body");
const wrapper = document.createElement("div");
const wrapChild = wrapper.childNodes;
const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
const arr = [];
wrapper.classList.add("wrapper");
const itemNum = 100;
const itemCounter = (num) => {
  arr.push(document.createElement("button"));
  if (num === 1) return num;
  else return itemCounter(num - 1);
};
itemCounter(itemNum);
let counter = 1;
const itemGenerator = (count) => {
  arr.map((getEl) => {
    getEl.classList.add("item");
    getEl.textContent = `${count++}`;
    getEl.style.backgroundColor = hex(color);
    getEl.setAttribute("onclick", "getNum(this.textContent)");
    wrapper.appendChild(getEl);
  });
};
itemGenerator(counter);
const getNum = (element) => {
  let restartCount = 1;
  wrapChild.forEach((child) => {
    if (
      element % child.textContent === 0 ||
      (child.textContent % element === 0 && !child.classList.contains("check"))
    ) {
      !restartCount++;
      child.textContent = "*";
      child.classList.add("check");
    } else {
      child.textContent = restartCount++;
      child.classList.remove("check");
    }
  });
};
function hex(cl) {
  cl.sort(() => 0.5 - Math.random());
  return "#" + cl.slice(0, 6).join("");
}
// Style
document.head.innerHTML += `
  <style>
  body {
    background: linear-gradient(to left, #141e30, #243b55);
    background-repeat: no-repeat;
    margin: 0;
    padding-top: 10px;
    height: calc(100vh - 10px);
  }
  .wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 12px;
    max-width: 1299px;
    margin: 0 auto;
  }
  .item {
    border: 2px solid transparent;
    border-radius: 10px;
    width: 100px;
    padding: 8px 2px;
    font-family: cursive;
    color: #fff;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s;
  }
  .check {
    transform: scale(1.2);
    transition: all 0.3s;
    background-color: #555 !important;
  }
  </style>`;

elBody.appendChild(wrapper);
