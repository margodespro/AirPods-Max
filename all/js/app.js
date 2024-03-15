const chooseColor = document.querySelectorAll(".choose__color-btn");
const contentItem = document.querySelectorAll(".content-item");

chooseColor.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const target = evt.currentTarget;
  const button = target.dataset.button;
  const contentActive = document.querySelectorAll(`.${button}`);

  chooseColor.forEach(item => item.classList.toggle("choose-color-btn--active", item === target));

  contentItem.forEach(item => item.classList.remove("content-item__active"));
  contentActive.forEach(item => item.classList.add("content-item__active"));
}

