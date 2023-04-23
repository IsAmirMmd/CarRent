export default class CarInStorage {
  static AllCar() {
    const allCar = [
      {
        id: 1,
        name: "NissanGT-R",
        model: "MUV",
        price: 99,
        gas: 20,
        person: "6",
        steer: "auto",
        image: "../src/assets/images/Car.svg",
      },
      {
        id: 2,
        name: "McLaren",
        model: "Sport Car",
        price: 83,
        gas: 20,
        person: "2",
        steer: "auto",
        image: "../src/assets/images/Koen.png",
      },
      {
        id: 3,
        name: "LamborGini",
        model: "Auto Car",
        price: 75,
        gas: 20,
        person: "2",
        steer: "manual",
        image: "../src/assets/images/MGZX.png",
      },
      {
        id: 4,
        name: "Porshe",
        model: "Sport Car",
        price: 65,
        gas: 20,
        person: "4",
        steer: "auto",
        image: "../src/assets/images/RollsRoyce.png",
      },
      {
        id: 5,
        name: "NissanGT-R",
        model: "MUV",
        price: 99,
        gas: 20,
        person: "6",
        steer: "auto",
        image: "../src/assets/images/Car.svg",
      },
      {
        id: 6,
        name: "McLaren",
        model: "Sport Car",
        price: 80,
        gas: 20,
        person: "4",
        steer: "auto",
        image: "../src/assets/images/Koen.png",
      },
      {
        id: 7,
        name: "LamborGini",
        model: "Sport Car",
        price: 75,
        gas: 20,
        person: "2",
        steer: "manual",
        image: "../src/assets/images/MGZX.png",
      },
      {
        id: 8,
        name: "All new rush",
        model: "Travel Car",
        price: 65,
        gas: 20,
        person: "6",
        steer: "auto",
        image: "../src/assets/images/recommand-Car1.png",
      },
    ];
    const savedCar = allCar.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem("all-car", JSON.stringify(savedCar));
    return JSON.parse(localStorage.getItem("all-car"));
  }
  static getFavoriteCar() {
    const favorite_cars =
      JSON.parse(localStorage.getItem("favorite-cars")) || [];
    return favorite_cars;
  }
  static setFavoriteCar(array) {
    localStorage.setItem("favorite-cars", JSON.stringify(array));
  }
}
