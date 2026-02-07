const carList = document.getElementById("carList");
const brandFilter = document.getElementById("brandFilter");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const searchInput = document.getElementById("searchInput");

function loadBrands() {
  const brands = [...new Set(cars.map(car => car.brand))];
  brands.forEach(brand => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
  });
}

function displayCars(list) {
  carList.innerHTML = "";
  list.forEach(car => {
    carList.innerHTML += `
      <div class="car-card">
        <img src="${car.image}" alt="${car.brand}">
        <h3>${car.brand} ${car.model}</h3>
        <p>€${car.price}</p>
        <a href="car.html?id=${car.id}" onclick="localStorage.setItem('selectedCarId', ${car.id})">View Details</a>
      </div>
    `;
  });
}

function filterCars() {
  const brand = brandFilter.value;
  const min = minPrice.value ? parseInt(minPrice.value) : 0;
  const max = maxPrice.value ? parseInt(maxPrice.value) : Infinity;
  const search = searchInput.value.toLowerCase();

  const filtered = cars.filter(car => {
    return (brand === "all" || car.brand === brand) &&
           car.price >= min &&
           car.price <= max &&
           (car.brand.toLowerCase().includes(search) || car.model.toLowerCase().includes(search));
  });

  displayCars(filtered);
}

brandFilter.addEventListener("change", filterCars);
minPrice.addEventListener("input", filterCars);
maxPrice.addEventListener("input", filterCars);
searchInput.addEventListener("input", filterCars);

loadBrands();
displayCars(cars);
