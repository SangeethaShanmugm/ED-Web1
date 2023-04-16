function locationManager() {
  //Array of objects

  locationList = [
    {
      id: 1,
      name: "Sarjapur Road",
      city: "Bangalore",
    },
    {
      id: 2,
      name: "Savita Vihar",
      city: "Delhi",
    },
    {
      id: 3,
      name: "Anand Vihar",
      city: "Delhi",
    },
    {
      id: 4,
      name: "Cantonment",
      city: "Mumbai",
    },
    {
      id: 5,
      name: "Vasant VIhar",
      city: "Delhi",
    },
  ];

  restaurantList = [
    {
      id: 1,
      restaurantName: "KFC",
      address: "Anand Vihar",
      city: "Delhi",
    },
    {
      id: 2,
      restaurantName: "Dominos",
      address: "Savita Vihar",
      city: "Delhi",
    },
    {
      id: 3,
      restaurantName: "Burger King",
      address: "Vasant Vihar",
      city: "Delhi",
    },
    { id: 4, restaurantName: "Subway", address: "Cantonment", city: "Mumbai" },
    {
      id: 5,
      restaurantName: "Empire Restaurant",
      address: "Sarjapur Road",
      city: "Bangalore",
    },
    {
      id: 6,
      restaurantName: "McD",
      address: "Anand Vihar",
      city: "Delhi",
    },
  ];

  printAllLocations = () => {
    return this.locationList.map((data) => {
      return data.name;
    });
  };

  filterLocationByCity = (cityName) => {
    return this.locationList.filter((data) => {
      return data.city === cityName;
    });
  };

  printAllRestaurants = () => {
    return this.restaurantList.map((data) => {
      return data.restaurantName;
    });
  };

  select = document.querySelector("#select");
  option = "";

  for (let x of locationList) {
    option += `<option value="${x.loc}">${x.loc}</option>`;
  }
  select.innerHTML = option;
}

console.log(locationManager());


// let locationList1 = new locationManager();

// console.log(locationList1.locationList);
// console.log(locationList1.printAllLocations());
// console.log(locationList1.filterLocationByCity("Mumbai"));
// console.log(locationList1.filterLocationByCity("Delhi"));

// console.log(locationList1.printAllRestaurants());

// localStorage.setItem("resData", locationList1.printAllRestaurants());
// var a = localStorage.getItem("resData");
// console.log(a);

// var b = localStorage.removeItem("resData");
// console.log(b);

// localStorage.setItem("resData", locationList1.printAllRestaurants());
// var a = localStorage.getItem("resData");
// console.log(a);
