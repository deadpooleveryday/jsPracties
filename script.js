function getRandomColor() {
  const red = Math.floor(Math.random() * 256).toString(16);
  const blue = Math.floor(Math.random() * 256).toString(16);
  const green = Math.floor(Math.random() * 256).toString(16);
  const color = `#${red.padStart(2, "0")}${blue.padStart(
    2,
    "0"
  )}${green.padStart(2, "0")}`;
  return color;
}

const lol = document.querySelectorAll(".sqr__color");

function yanchik(el){
      const gg = getRandomColor().toUpperCase();
      el.style.backgroundColor = gg;
      el.style.borderColor = gg;
      el.querySelector(".copy").textContent = gg;
}

lol.forEach((el) => {  
  el.querySelector(".btn").addEventListener("click", () => {
yanchik(el);
  });
});

const btnRandom = document.querySelector(".random");

  btnRandom.addEventListener("click", () => {
    lol.forEach((el) => {
      yanchik(el);        
      });
    });
