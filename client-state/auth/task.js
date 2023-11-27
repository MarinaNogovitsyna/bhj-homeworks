const signin = document.getElementById("signin");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
const form = document.getElementById("signin__form");
const singenBtn = document.getElementById("signin__btn");
const btnGoOut = document.getElementById("go-out");

if (localStorage.getItem("id")) {
  addWelcome();
}

singenBtn.onclick = async (e) => {
  e.preventDefault();
  let response = await fetch(
    "https://students.netoservices.ru/nestjs-backend/auth",
    {
      method: "POST",
      body: new FormData(form),
    }
  );

  let result = await response.json();

  if (result.success) {
    localStorage.setItem("id", result.user_id);
    addWelcome();
  } else {
    alert("Неверный логин/пароль");
  }
  form.reset();
};

function addWelcome() {
  signin.classList.remove("signin_active");
  welcome.classList.add("welcome_active");
  userId.textContent = localStorage.getItem("id");
}

btnGoOut.addEventListener("click", () => {
  signin.classList.add("signin_active");
  welcome.classList.remove("welcome_active");
  localStorage.removeItem('id')
});

