const filterIcon = document.querySelector(".navbar__icon.filter");
const categoryContainer = document.querySelector(".category-container");
class Navbar {
  constructor() {
    filterIcon.addEventListener("click", (e) => this.toggleNav(e));
  }
  toggleNav(e) {
    filterIcon.firstElementChild.classList.toggle("rotate");
    categoryContainer.classList.toggle("navbar__expanded");
  }
}

export default new Navbar();
