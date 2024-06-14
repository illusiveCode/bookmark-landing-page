const navButton = document.getElementById("navButton");
const siteLogo = document.getElementById("siteLogo");
const navigation = document.querySelector(".primary-navigation");
const navWrapper = document.querySelector(".nav-wrapper");
let isOpen = false;
const setButtonSrc = (isOpen) => {
  if (isOpen) {
    navButton.src = "/images/icon-close.svg";
    navButton.style.position = "absolute";
    navButton.style.zIndex = "9999";
    navButton.style.top = "2.5rem";
    navButton.style.right = "2.5rem";
  } else {
    navButton.src = "/images/icon-hamburger.svg";
  }
};

const showMobileMenu = (isOpen) => {
  if (isOpen) {
    navigation.style.display = "block";
    // navWrapper.style.display = "block";
  } else {
    navButton.style.position = "static";
    navigation.style.display = "none";
    // navWrapper.style.display = "none";
  }
};

navButton.addEventListener("click", () => {
  isOpen = !isOpen;
  setButtonSrc(isOpen);
  showMobileMenu(isOpen);
});
