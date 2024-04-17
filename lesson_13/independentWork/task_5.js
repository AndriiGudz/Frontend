// ### Задание 5
// Повысьте цену всех машин в массиве на 20%.

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
]
console.log('Изначальный массив: ', cars)


for (let i = 0; i < cars.length; i++) {
    cars[i].price = cars[i].price * 0.2 + cars[i].price
}
console.log('Изначальный массив с измененными ценами: ', cars)