const cars = [
    { brand: 'Tesla', model: 'Model S', year: 2022, color: 'red', isElectric: true },
    { brand: 'Toyota', model: 'Camry', year: 2018, color: 'blue', isElectric: false },
    { brand: 'BMW', model: 'X5', year: 2020, color: 'black', isElectric: false },
    { brand: 'Nissan', model: 'Leaf', year: 2021, color: 'green', isElectric: true },
    { brand: 'Ford', model: 'Mustang', year: 2019, color: 'yellow', isElectric: false }
  ]

//* Задание 1
// Создайте новый массив, содержащий только электрические машины (свойство isElectric равно true) и включающий только их модели и цвета. Объедините модели и цвета каждой машины в одну строку, разделенную запятой и пробелом.

const electricCarsInfo = cars
    .filter(car => car.isElectric)
    .map(car => `${car.model}, ${car.color}`);

console.log(electricCarsInfo);

//* Задание 2
// Создайте новый массив, содержащий машины, отсортированные по году выпуска в порядке убывания. Объедините модели и бренды каждой машины в одну строку, разделенную дефисом. Переставьте машины в строке в обратном порядке.

const sortCars = cars
    .sort((a, b) => b.year - a.year)
    .map(car => `(${car.model} ${car.brand})`)
    .join(' - ')
    .split('-')
    .reverse()
    .join('-')

console.log(sortCars)

const sortCarsOp = cars
    .sort((a, b) => b.year - a.year)
    .map(car => `(${car.model} ${car.brand})`)
    .reverse()
    .join('—')

console.log(sortCarsOp)

//* Задание 3
// Напишите функцию, она будет принимать массив строк, приводить каждую строку к нижнему регистру, сортировать, а затем переворачивать каждое слово в строке задом наперед, и наконец делать первую букву в строке заглавной.
// Для того, чтобы сделать первую букву заглавной используйте charAt()

const furniture = ['Sofa', 'laMp', 'warDRobe', 'FRIDGE', 'bed']

const transform = (array) => {
  return array
  .map(el => el.toLowerCase())
  .sort()
  .map(el => el.split('').reverse().join(''))
  .map(el => el.charAt(0).toUpperCase() + el.slice(1))
}

console.log(transform(furniture))

//* Задание 4
// Напиши функцию, которая удаляет все нечетные числа и выдает массив отсортированных чисел задом наперед, а также число - их сумму в шаблонной строке.

const numbers = [22, 4, 5, 1, 333]

const sortNumbers = arr => {
  const filteredNumbers = arr.filter(el => el % 2).sort((a, b) => b - a)
  
  return `Общее значение: ${filteredNumbers.reduce((acc, num) => acc + num, 0)}, сами числа: ${filteredNumbers.join(', ')}`
}

console.log(sortNumbers(numbers))