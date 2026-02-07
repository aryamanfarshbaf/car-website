const params = new URLSearchParams(window.location.search);
const carId = parseInt(params.get("id"));

const car = cars.find(c => c.id === carId);

document.getElementById("carDetails").innerHTML = `
  <img src="${car.image}" alt="${car.brand}">
  <h2>${car.brand} ${car.model}</h2>
  <div class="info">
    <p>Year: ${car.year}</p>
    <p>Price: €${car.price}</p>
    <p>Mileage: ${car.mileage} km</p>
    <p>${car.description}</p>
  </div>
`;
