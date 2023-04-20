import Navbar from "./navbar.js";
import ProductUI from "./ProductUI.js";
import CarInStorage from "./Storage.js";

document.addEventListener("DOMContentLoaded", () => {
  Navbar;
  CarInStorage.getFavoriteCar();
  ProductUI.showProduct(CarInStorage.AllCar());
  ProductUI.showAllRecommendedCar(CarInStorage.AllCar());
  ProductUI.favoriteBadge();
});
