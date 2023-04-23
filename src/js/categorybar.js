const NavbarList = document.querySelector(".list-option");
const filterIcon = document.querySelector(".navbar__icon.filter");
class CategoryBar {
  constructor() {
    filterIcon.addEventListener("click", (e) => this.toggleNav(e));
  }
  toggleNav(e) {
    filterIcon.firstElementChild.classList.toggle("rotate");
    NavbarList.classList.toggle("navbar__expanded");
  }
}

export default new CategoryBar();
