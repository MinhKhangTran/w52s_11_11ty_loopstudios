const toggler = document.querySelector(".nav__header--toggler");
const navBar = document.querySelector(".nav__bar");
const header = document.querySelector("header");
toggler.addEventListener("click", () => {
  // Toggle class "opened". Set also aria-expanded to true or false.
  if (-1 !== toggler.className.indexOf("opened")) {
    toggler.className = toggler.className.replace(" opened", "");
    toggler.setAttribute("aria-expanded", "false");
    toggler.innerHTML = `<svg width="24" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z"/></g></svg>`;
    navBar.className = navBar.className.replace(" opened", "");
    header.className = header.className.replace(" opened", "");
  } else {
    toggler.className += " opened";
    navBar.className += " opened";
    header.className += " opened";
    toggler.setAttribute("aria-expanded", "true");
    toggler.innerHTML = `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z" fill="#FFF" fill-rule="evenodd"/></svg>`;
  }
});
// Check if responsive menu is open when resized and then remove
window.addEventListener("resize", () => {
  if (
    navBar.classList.contains("opened") &&
    window.matchMedia("(min-width: 765px)").matches
  ) {
    toggler.className = toggler.className.replace(" opened", "");
    toggler.setAttribute("aria-expanded", "false");
    navBar.className = navBar.className.replace(" opened", "");
    header.className = header.className.replace(" opened", "");
  }
});
