// создайте массив строк из пяти элементов - марок автомобилей
// выведите значение в консоль при помощи цикла for
// поменяйте первый и последний элементы местами
// и вновь распечатайте массив в консоли

let brandAuto = ['bmw', 'audi', 'mercedes', 'reno', 'fiat']

for (let i = 0; i < brandAuto.length; i++) {
    console.log(brandAuto[i])
}

let cars = brandAuto[0];
brandAuto[0] = brandAuto[brandAuto.length - 1];
brandAuto[brandAuto.length - 1] = cars;

console.log(brandAuto)

for (let i = 0; i < brandAuto.length; i++) {
    console.log(brandAuto[i])
}