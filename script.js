function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const color = `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`;
  return color;
}

const lol = document.querySelector(".sqr__color");

function clickColor() {
  const kek = getRandomColor().toUpperCase();
  lol.style.backgroundColor = kek;
  const textName = document.querySelector(".copy");
  textName.textContent = kek;
  lol.style.borderColor = kek;
}

lol.addEventListener("click", (evt) => {
  console.log(evt.type);
  clickColor();
});

const lol2 = document.querySelector(".sqr__color2");

function clickColor2() {
  const kek2 = getRandomColor().toUpperCase();
  lol2.style.backgroundColor = kek2;
  const textName = document.querySelector(".copy2");
  textName.textContent = kek2;
  lol2.style.borderColor = kek2;
}

lol2.addEventListener("click", (evt) => {
  console.log(evt.type);
  clickColor2();
});

const lol3 = document.querySelector(".sqr__color3");

function clickColor3() {
  const kek3 = getRandomColor().toUpperCase();
  lol3.style.backgroundColor = kek3;
  const textName = document.querySelector(".copy3");
  textName.textContent = kek3;
  lol3.style.borderColor = kek3;
}

lol3.addEventListener("click", (evt) => {
  console.log(evt.type);
  clickColor3();
});

const btnRandom = document.querySelector(".random");
btnRandom.addEventListener("click", (evt) => {
  console.log(evt.type);
  clickColor();
  clickColor2();
  clickColor3();
});