const portfolioItems = document.querySelectorAll(".portfolio-item-wrapper");

for (const item of portfolioItems) {
  item.addEventListener("mouseover", (e) => {
    item.childNodes[1].classList.add("img-darken");
  });
  item.addEventListener("mouseout", (e) => {
    item.childNodes[1].classList.remove("img-darken");
  });
}
