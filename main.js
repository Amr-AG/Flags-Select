let lis = document.querySelectorAll(".header .list li");
let imgs = Array.from(document.images);

lis.forEach((li) => {
  li.addEventListener("click", addAc);
  li.addEventListener("click", im);
});

function addAc() {
  lis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function im() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.title).forEach((ele) => {
    ele.style.display = "block";
  });
}
