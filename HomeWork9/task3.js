const car1 = {
    brand: "Toyota",
    model: "Siena",
    yaer: 2020
};

const car2 = {
    brand: "Toyota",
    model: "Corola",
    owner: "Zdorenko Tetiana"
};

const car3 = {...car1, ...car2};

console.log(car3);