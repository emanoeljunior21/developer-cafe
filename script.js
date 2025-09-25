const animarItens = document.querySelectorAll(".animar");

const boxesMenu = document.querySelectorAll(".menu .box-container .box");
const boxesReview = document.querySelectorAll(".review .box-container .box");

function animarScroll() {
  const windowTop = window.innerHeight * 0.85;

  animarItens.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < windowTop) {
      item.classList.add("show");
    }
  });

  boxesMenu.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < windowTop) {
      setTimeout(() => {
        box.classList.add("show");
      }, index * 150);
    }
  });

  boxesReview.forEach((box, index) => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < windowTop) {
      setTimeout(() => {
        box.classList.add("show");
      }, index * 150);
    }
  });
}

window.addEventListener("scroll", animarScroll);
window.addEventListener("load", animarScroll);
