const cars = [
    { brand: 'Tesla', model: 'Model S', year: 2022, color: 'red', isElectric: true },
    { brand: 'Toyota', model: 'Camry', year: 2018, color: 'blue', isElectric: false },
    { brand: 'BMW', model: 'X5', year: 2020, color: 'black', isElectric: false },
    { brand: 'Nissan', model: 'Leaf', year: 2021, color: 'green', isElectric: true },
    { brand: 'Ford', model: 'Mustang', year: 2019, color: 'yellow', isElectric: false }
  ]

// Задание 1
// Создайте новый массив, содержащий только электрические машины (свойство isElectric равно true) и включающий только их модели и цвета. Объедините модели и цвета каждой машины в одну строку, разделенную запятой и пробелом.

const electricCarsInfo = cars
    .filter(car => car.isElectric)
    .map(car => `${car.model}, ${car.color}`);

console.log(electricCarsInfo);