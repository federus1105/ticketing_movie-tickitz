const play = document.querySelector("#play");
const payment = document.querySelector(".payment_info");
const belakang = document.querySelector(".belakang")

play.addEventListener("click", function () {
  payment.classList.toggle("active");
  belakang.classList.toggle("active")
});
