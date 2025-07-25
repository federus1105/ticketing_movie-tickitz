// Cek apakah user sudah login
const user = JSON.parse(localStorage.getItem("user"));
const loginForm = document.querySelector("form");
const emailInput = loginForm.querySelector("#email");
const passwordInput = loginForm.querySelector("#password");
if (user) {
  window.location.href = "index.html";
}
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const storedUser = JSON.parse(localStorage.getItem("user"));

  if (!storedUser) {
    alert("Belum ada akun. Silakan register.");
    return;
  }

  if (email === storedUser.email && password === storedUser.password) {
    alert("Login berhasil!");
    window.location.href = "index.html";
  } else {
    alert("Email atau password salah!");
  }
});
