const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
]

// ### Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const dieselCars = []
for (let i = 0; i < cars.length; i++) {
    if (cars[i].isDiesel) {
        dieselCars.push(cars[i])
    }
}

console.log('Вариант с использованием цикла: ',dieselCars)

// Вариант 2

const dieselCars1 = cars.filter(car => car.isDiesel)
console.log('Вариант с использованием фильтра: ', dieselCars1)

// ### Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const benzineCars = []
for (let i = 0; i < cars.length; i++) {
    if (cars[i].isDiesel === false) {
        benzineCars.push(cars[i])
    }
}

console.log('Бензиновые автомобили, с использованием цикла: ',benzineCars)

// Вариант 2

const benzineCars1 = cars.filter(car => car.isDiesel === false)
console.log('Бензиновые автомобили, с использованием фильтра: ', benzineCars1)


// ### Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.

let sumPriceBenzine = 0
for (let i = 0; i < benzineCars.length; i++) {
    sumPriceBenzine += benzineCars[i].price
}
console.log('Общая стоимость всех машин не с дизельным двигателем: ', sumPriceBenzine)