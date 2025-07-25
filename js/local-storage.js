const loggedln = localStorage.getItem(`loggedln`);

if (loggedln !== `true`) {
  window.location.href = "sign-in.html";
} else {
  if (loggedln) {
    const profil = document.querySelector(".profile");
    const btn = document.querySelector(`btn.login`);

    profil.classList.add(`profil-aktif`);
    btn.classList.add(`btn-hidden`);
  }
}
