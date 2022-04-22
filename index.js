const body = document.getElementsByTagName("body")[0];

const darkModeBtn = document.getElementById("dark-mode");
console.log(darkModeBtn);

const switchTheme = () => {
  body.classList.toggle("theme-dark");
};

darkModeBtn.addEventListener("click", switchTheme);
