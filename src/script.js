const burger = document.querySelector("#burger");
const mobileNav = document.querySelector("#mobile-nav");

burger.addEventListener("click", () => {
  if (mobileNav.classList.contains("hidden")) {
    mobileNav.classList.remove("hidden");
  } else {
    mobileNav.classList.add("hidden");
  }
});
