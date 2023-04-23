import CarInStorage from "./Storage.js";
import ProductUI from "./ProductUI.js";
// ----------------------------------
const favoriteContainer = document.querySelector(
  ".pop-cars.favorite-container"
);
const SearchBar = document.querySelector("#search-bar");
const recar = document.querySelector(".rec-car");
const CarContainerForRecommended = document.querySelector(".rec-cars");
const RecTitle = document.querySelector(".rec-title span");
const CarContainer = document.querySelector(".pop-cars");

// ----------------------------------

class Favorite {
  constructor() {
    SearchBar.addEventListener("change", (e) => {
      if (window.location.pathname === "/public/favorite.html") {
        ProductUI.searchCar(e, CarInStorage.getFavoriteCar());
      }
    });
  }
  showFavoriteCar() {
    let selectedCars = CarInStorage.getFavoriteCar();
    let AllFavCar = [];
    selectedCars.forEach((item) => {
      AllFavCar += `
            <div class="car-product" data-id="${item.id}">
            <div class="car-product__car-name">
              <p>${item.name}</p>
              <span class="add-to-favorite" data-id="${item.id}">♥</span>
            </div>
            <div class="car-product__car-model">
                ${item.model}
            </div>
            <div class="holder">
              <div class="car-product__image">
                <div class="fade"></div>
                <img src=${item.image} alt="car-image" />
              </div>
              <div class="car-product__info">
                <p class="inline-span">
                  <span class="span-image">
                    <img src="../src/assets/images/svg.svg" alt="" />
                  </span>
                  <span>
                    ${item.gas}L
                  </span>
                </p>
                <p class="inline-span">
                  <span class="span-image">
                    <img src="../src/assets/images/dande.svg" alt="" />
                  </span>
                  <span>
                    ${item.steer}
                  </span>
                </p>
                <p class="inline-span">
                  <span class="span-image">
                    <img src="../src/assets/images/peaople.svg" alt="" />
                  </span>
                  <span>
                    ${item.person} Person
                  </span>
                </p>
              </div>
            </div>
            <div class="car-product__purchase">
              <span style="font-weight: bolder; font-size: 2rem">
               $${item.price}.00
              </span>
              <a href="./car-details.html" class="btn btn-primary">Rent Now</a>
            </div>
          </div>
            `;
    });
    if (window.location.pathname === "/public/favorite.html") {
      favoriteContainer.innerHTML = AllFavCar || [];
    }
    // ---------------------------
    const favoriteBtn = document.querySelectorAll(".add-to-favorite");
    // ---------------------------
    favoriteBtn.forEach((item) => {
      const ID = item.dataset.id;
      const favoritedCars = CarInStorage.getFavoriteCar();
      let IsFave = favoritedCars.find((c) => c.id == ID);
      if (IsFave) {
        item.classList.add("red-heart");
      }
      let favorites = favoritedCars;
      item.addEventListener("click", (e) => {
        e.preventDefault();
        if (favorites.find((c) => c.id == item.dataset.id)) {
          item.classList.remove("red-heart");
          favorites = favorites.filter((car) => car.id != item.dataset.id);
        } else {
          item.classList.add("red-heart");
          favorites.push(
            CarInStorage.AllCar().find((c) => c.id == item.dataset.id)
          );
        }
        CarInStorage.setFavoriteCar(favorites);
        this.showFavoriteCar();
        ProductUI.favoriteBadge();
      });
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  const FavoriteClass = new Favorite();
  FavoriteClass.showFavoriteCar();
  ProductUI.favoriteBadge();
});

export default new Favorite();
