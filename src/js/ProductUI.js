import CarInStorage from "./Storage.js";
const CarContainerForRecommended = document.querySelector(".rec-cars");
const CarContainer = document.querySelector(".pop-cars");
class ProductUI {
  constructor() {}
  showProduct() {
    let AllProducts = [];
    for (let i = 0; i < 5; i++) {
      const item = CarInStorage.AllCar()[i];
      AllProducts += `
        <div class="car-product" data-id="${item.id}">
        <div class="car-product__car-name">
          <p>${item.name}</p>
          <span>♥</span>
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
          <button class="btn btn-primary">Rent Now</button>
        </div>
      </div>
        `;
    }

    CarContainer.innerHTML = AllProducts;
  }
  showAllRecommendedCar() {
    let AllRecCar = [];
    CarInStorage.AllCar().forEach((item) => {
      AllRecCar += `
        <div class="car-product" data-id="${item.id}">
        <div class="car-product__car-name">
          <p>${item.name}</p>
          <span>♥</span>
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
          <button class="btn btn-primary">Rent Now</button>
        </div>
      </div>
        `;
    });
    CarContainerForRecommended.innerHTML = AllRecCar;
  }
}

export default new ProductUI();
