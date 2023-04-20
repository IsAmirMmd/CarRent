import CarInStorage from "./Storage.js";
import Favorite from "./favorite.js";
// ------------------------------------
let favoriteContainer = { ..."" };
const favoriteBadge = document.querySelector(".red-badge");
const CarContainerForRecommended = document.querySelector(".rec-cars");
const RecTitle = document.querySelector(".rec-title span");
const recar = document.querySelector(".rec-car.continer");
const CarContainer = document.querySelector(".pop-cars");
const SearchBar = document.querySelector("#search-bar");

// --------------------------------------
class ProductUI {
  constructor() {
    SearchBar.addEventListener("change", (e) => {
      this.searchCar(e, CarInStorage.AllCar());
    });
    this.Categories();
    if (window.location.pathname.includes("details")) {
      this.showCarDetails();
    }
  }
  showProduct(Cars) {
    let AllProducts = [];
    for (let i = 0; i < 5; i++) {
      const item = Cars[i];
      AllProducts += `
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
          <a data-id=${item.id} class="btn btn-primary forRent">Rent Now</a>
        </div>
      </div>
        `;
      const forRent = document.querySelectorAll(".forRent");
      forRent.forEach((btn) => {
        btn.addEventListener("click", (e) => {
          localStorage.setItem("CarID", JSON.stringify(e.target.dataset.id));
          this.showCarDetails();
          window.location.href = "./car-details.html";
        });
      });
    }

    CarContainer.innerHTML = AllProducts;
    this.favoriteCar();
  }
  showAllRecommendedCar(Cars) {
    let AllRecCar = [];
    Cars.forEach((item) => {
      AllRecCar += `
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
          <a data-id=${item.id} class="btn btn-primary forRent">Rent Now</a>
        </div>
      </div>
        `;
    });
    CarContainerForRecommended.innerHTML = AllRecCar;
    const forRent = document.querySelectorAll(".forRent");
    forRent.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        localStorage.setItem("CarID", JSON.stringify(e.target.dataset.id));
        this.showCarDetails();
        window.location.href = "./car-details.html";
      });
    });
    this.favoriteCar();
  }
  showCarDetails() {
    if (window.location.pathname.includes("car-details")) {
      const ID = JSON.parse(localStorage.getItem("CarID")) || [];
      let carName = CarInStorage.AllCar().filter((car) => car.id == ID);
      carName = carName[0];
      const car_details = document.querySelector(".car-details");
      const carDetails = `
      <div class="car-details__info">
        <div class="car-details__image">
          <div class="main--image">
            <img src=${carName.image} alt="" />
          </div>
          <div class="secondory--images">
            <div>
              <img src="../src/assets/images/details1.png" alt="" />
            </div>
            <div><img src="../src/assets/images/ads1.png" alt="" /></div>
            <div><img src="../src/assets/images/detail3.png" alt="" /></div>
          </div>
        </div>
        <div class="car-details__detail">
          <h4>${carName.name}</h4>
          <div class="car-rate">
            <div class="car-stars">
              <img src="../src/assets/images/fill-star.svg" alt="" />
              <img src="../src/assets/images/fill-star.svg" alt="" />
              <img src="../src/assets/images/fill-star.svg" alt="" />
              <img src="../src/assets/images/fill-star.svg" alt="" />
              <img src="../src/assets/images/empty-star.svg" alt="" />
            </div>
            <p class="car-text">
              <span class="car-badge">450+</span>
            </p>
          </div>
          <p class="car-description">
            NISMO has become the embodiment of Nissan's outstanding
            performance, inspired by the most unforgiving proving ground,
            the "race track".
          </p>
          <div class="car--details">
            <div>
              <span class="car-info-type car-type">Type Car</span>
              <p class="car-info car-info-type">${carName.model}</p>
            </div>
            <div>
              <span class="car-info-type car-capacity">Capacity</span>
              <p class="car-info car-info-cap">${carName.person} person</p>
            </div>
            <div>
              <span class="car-info-type car-steering">steering</span>
              <p class="car-info car-info-steer">${carName.steer}</p>
            </div>
            <div>
              <span class="car-info-type car-gasoline">Gasoline</span>
              <p class="car-info car-info-gas">${carName.gas}</p>
            </div>
          </div>
          <div class="car-purchase">
            <div class="car-price">
              <p class="car-price-now">${carName.price}</p>
              <p class="car-price-last">100.00</p>
            </div>
            <a href="./payment.html" class="btn btn-primary">Rent Now</a>
          </div>
        </div>
      </div>
      <div class="car-details__review">
        <div class="review-badge">
          <p>Reviews</p>
          <span class="review-badge-num">17</span>
        </div>
        <div class="review-msg">
          <div class="user-details">
            <div class="user-profile">
              <img src="../src/assets/images/profile.webp" alt="" />
            </div>
            <div class="user-name">
              <p class="user--name">Amir Mmd</p>
              <p class="user--job">CEO of Google</p>
            </div>
            <div class="user-review">
              <p class="msg-date">21 june 2021</p>
              <div class="msg-stars">
                <img src="../src/assets/images/fill-star.svg" alt="" />
                <img src="../src/assets/images/fill-star.svg" alt="" />
                <img src="../src/assets/images/fill-star.svg" alt="" />
                <img src="../src/assets/images/fill-star.svg" alt="" />
                <img src="../src/assets/images/empty-star.svg" alt="" />
              </div>
            </div>
          </div>
          <p class="review-text">
            We are very happy with the service from the MORENT App. Morent
            has a low price . . .
          </p>
        </div>
        <div class="review-msg">
          <div class="user-details">
            <div class="user-profile">
              <img src="../src/assets/images/profile.webp" alt="" />
            </div>
            <div class="user-name">
              <p class="user--name">Amir Mmd</p>
              <p class="user--job">CEO of Google</p>
            </div>
            <div class="user-review">
              <p class="msg-date">21 june 2021</p>
              <div class="msg-stars">
                <img src="../src/assets/images/fill-star.svg" alt="" />
                <img src="../src/assets/images/fill-star.svg" alt="" />
                <img src="../src/assets/images/fill-star.svg" alt="" />
                <img src="../src/assets/images/fill-star.svg" alt="" />
                <img src="../src/assets/images/empty-star.svg" alt="" />
              </div>
            </div>
          </div>
          <p class="review-text">
            We are very happy with the service from the MORENT App. Morent
            has a low price . . .
          </p>
        </div>
        <div class="show-all-msg">
          <button class="btn">show all</button>
        </div>
      </div>
      `;
      car_details.innerHTML = carDetails;
    }
  }
  searchCar(e, space) {
    let filteredWord = "";
    let filteredCar = [];
    filteredWord = e.target.value.toLowerCase();
    space.forEach((element) => {
      if (element.name.toLowerCase().includes(filteredWord)) {
        filteredCar.push(element);
      }
    });
    if (e.target.value) {
      if (filteredCar.length == 0) {
        e.target.value = "";
        alert("No Result\nSearch Another");
      }
      CarContainer.parentElement.style.display = "none";
      RecTitle.innerText = "Search Result";
      this.showAllRecommendedCar(filteredCar);
    } else {
      if (window.location.pathname === "/public/favorite.html") {
        Favorite.showFavoriteCar(CarInStorage.getFavoriteCar());
        let emptyArray = [];
        this.showAllRecommendedCar(emptyArray);
        RecTitle.innerText = "";
      } else {
        this.showProduct(space);
        this.showAllRecommendedCar(space);
        RecTitle.innerText = "recommendation Car";
      }
      CarContainer.parentElement.style.display = "flex";
    }
  }
  favoriteCar() {
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
        this.showProduct(CarInStorage.AllCar());
        this.showAllRecommendedCar(CarInStorage.AllCar());
        this.favoriteBadge();
      });
    });
  }
  favoriteBadge() {
    if (CarInStorage.getFavoriteCar().length > 0) {
      favoriteBadge.style.background = "red";
    } else {
      favoriteBadge.style.background = "transparent";
    }
  }
  Categories() {
    if (
      window.location.pathname.includes("category") ||
      window.location.pathname.includes("car-details")
    ) {
      const categoryitem = document.querySelector(".category-item");

      let CategoryName = [];
      CarInStorage.AllCar().forEach((car) => {
        let IsTekrari = false;
        CategoryName.forEach((type) => {
          if (car.model === type.name) {
            IsTekrari = true;
          }
        });
        if (!IsTekrari) {
          CategoryName.push({ name: car.model, count: 1 });
        } else {
          CategoryName.map((carType) => {
            if (carType.name == car.model) {
              carType.count++;
            }
          });
        }
      });
      CategoryName.sort((a, b) => a.name.localeCompare(b.name));
      let emptyCategory = `
        <p>TYPE</p>
      `;

      CategoryName.forEach((type) => {
        emptyCategory += `
          <div class="checkbox-div">
            <input type="checkbox"
            value="${type.name.split(" ")[0]}"
            id=${type.name.split(" ")[0]}
            class="categoryType" />
            <label for="${type.name.split(" ")[0]}">${
          type.name.split(" ")[0]
        }</label>
            <span>${type.count}</span>
        </div>
        `;
      });

      let CategoryCap = [];
      CarInStorage.AllCar().forEach((car) => {
        let IsTekrari = false;
        CategoryCap.forEach((type) => {
          if (car.person === type.capacity) {
            IsTekrari = true;
          }
        });
        if (!IsTekrari) {
          CategoryCap.push({ capacity: car.person, count: 1 });
        } else {
          CategoryCap.map((carType) => {
            if (carType.capacity == car.person) {
              carType.count++;
            }
          });
        }
      });
      CategoryCap.sort((a, b) => a.capacity - b.capacity);
      emptyCategory += `
        <p>capacity</p>
      `;

      CategoryCap.forEach((type) => {
        emptyCategory += `
          <div class="checkbox-div">
            <input type="checkbox" value=${type.capacity}
             id="${type.capacity}person" class="categoryType" />
            <label for="${type.capacity}person">${type.capacity} per</label>
            <span>${type.count}</span>
        </div>
        `;
      });

      emptyCategory += `
        <p>Price</p>
      `;

      let CategoryMaxPrice = 0;
      CarInStorage.AllCar().forEach((car) => {
        if (car.price > CategoryMaxPrice) {
          CategoryMaxPrice = car.price;
        }
      });
      emptyCategory += `
        <div class="range-div">
          <input type="range" value="${CategoryMaxPrice}/2" name="" id="range-price" min="0.00" max="${CategoryMaxPrice}.00" />
            <p>
               Max.$
               <span id="rangeMax">
               ${Math.floor(CategoryMaxPrice / 2)}.00
               </span>
            </p>
        </div>
      `;

      categoryitem.innerHTML = emptyCategory;
      const categoryType = document.querySelectorAll(".categoryType");
      let filteredCar = [];
      let usedCheckBox = [];
      categoryType.forEach((check) => {
        check.addEventListener("click", (e) => {
          let IsTekrari = false;
          usedCheckBox.forEach((item) => {
            if (e.target.value == item) {
              IsTekrari = true;
            }
          });
          if (!IsTekrari) {
            if (filteredCar.length == 0) {
              usedCheckBox.push(e.target.value);
              filteredCar = CarInStorage.AllCar().filter(
                (car) =>
                  car.person.includes(usedCheckBox[usedCheckBox.length - 1]) ||
                  car.model.includes(usedCheckBox[usedCheckBox.length - 1])
              );
            } else {
              usedCheckBox.push(e.target.value);
              filteredCar = filteredCar.filter(
                (car) =>
                  car.person.includes(usedCheckBox[usedCheckBox.length - 1]) ||
                  car.model.includes(usedCheckBox[usedCheckBox.length - 1])
              );
            }
          } else {
            usedCheckBox = usedCheckBox.filter((c) => c != e.target.value);

            filteredCar = CarInStorage.AllCar().filter(
              (car) =>
                car.person.includes(usedCheckBox[usedCheckBox.length - 1]) ||
                car.model.includes(usedCheckBox[usedCheckBox.length - 1])
            );
          }
          if (usedCheckBox.length === 0) {
            this.showAllRecommendedCar(CarInStorage.AllCar());
          } else this.showAllRecommendedCar(filteredCar);
        });
      });
      const rangePrice = document.querySelector("#range-price");
      const rangeMax = document.querySelector("#rangeMax");
      let rangedPro = [];
      rangePrice.addEventListener("input", (e) => {
        rangeMax.innerText = rangePrice.value + ".00";
        if (filteredCar.length != 0) {
          console.log(filteredCar.length + "hi");

          rangedPro = filteredCar.filter(
            (car) => car.price <= rangePrice.value
          );
          console.log(rangedPro);
        } else {
          rangedPro = CarInStorage.AllCar().filter(
            (car) => car.price <= rangePrice.value
          );
        }
        this.showAllRecommendedCar(rangedPro);
      });
    }
  }
}

export default new ProductUI();
