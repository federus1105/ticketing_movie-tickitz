const profile = document.querySelector("#profile-image");
const logout = document.querySelector("#logout");

profile.addEventListener("click", function () {
  logout.classList.toggle("active");
});

const user = JSON.parse(localStorage.getItem("user"));
const authButtons = document.getElementById("auth-buttons");
const profil = document.getElementById("profile");
const logoutBtn = document.getElementById("logout");

if (user) {
  authButtons.style.display = "none";
  profile.style.display = "block";
} else {
  authButtons.style.display = "block";
  profile.style.display = "none";
}

logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("user");
  window.location.href = "sign-in.html";
});
