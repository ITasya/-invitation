document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelectorAll(".page__btn");
  let popupBg = document.querySelector(".popup__bg");
  let popup = document.querySelector(".popup"); 
  btn.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault(); 
      popupBg.classList.add("active"); 
      popup.classList.add("active");
    });
  });
  document.addEventListener("click", (e) => {
    if (e.target === popupBg) {
      popupBg.classList.remove("active"); 
      popup.classList.remove("active"); 
    }
  });
});
