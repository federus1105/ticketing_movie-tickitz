const user = JSON.parse(localStorage.getItem("user"));

const form = document.querySelector("form");
const emailInput = form.querySelector("#email");
const errorem = form.querySelector("#errorem");
const errorpass = form.querySelector("#errorpass");
const passwordInput = form.querySelector("#password");

// regex untuk email
const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+$/;
// regex untuk huruf kecil
const regexkecil = /[a-z]/;
// regex untuk huruf besar
const regexbesar = /[A-Z]/;
// regex untuk karakter spesial
const spesial = /[!@#$%^&*\/><]/;
errorem.style.cssText = "color:red; margin-top:-5px; margin-left:45px;";
errorpass.style.cssText = "color:red; margin-top:-5px; margin-left:45px;";
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  const passValue = passwordInput.value.trim();
  // Validasi Email
  if (emailValue === ``) {
    emailInput.style.border = "1px solid red";
    errorem.textContent = "Email tidak boleh kosong";
  } else if (!re.test(emailValue)) {
    emailInput.style.border = "1px solid red";
    errorem.textContent = "Format Email salah";
  }

  // Validasi PassWordd
  if (passValue === ``) {
    errorpass.textContent = "Password tidak boleh kosong";
  } else if (passValue.length < 8) {
    errorpass.textContent = "Minimal harus 8 karakter";
  } else if (!regexkecil.test(passValue)) {
    errorpass.textContent = "Minimal harus ada huruf kecil";
  } else if (!regexbesar.test(passValue)) {
    errorpass.textContent = "Harus ada huruf Besar";
  } else if (!spesial.test(passValue)) {
    errorpass.textContent = "harus ada karakter spesial !@#$%^&*/<>";
  } else {
    /* Jika input email benar tetapi password salah, input email tidak akan
  muncul di console harus kedua nya benar */
    emailInput.style.border = "2px solid green";
    errorem.textContent = "";
    passwordInput.style.border = "2px solid green";
    errorpass.textContent = "";

    // Simpan ke localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        email: emailValue,
        password: passValue,
      })
    );

    console.log("\nEmail:", emailValue);
    console.log("Password:", passValue);

    window.location.href = "sign-in.html";
  }
});
