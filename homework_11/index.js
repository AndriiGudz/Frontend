// Задание 1
// Создайте массив с элементами: "Мария", "Алексей", "Елена", "Дмитрий". Создайте массив с возрастами: 22, 31, 45, 53. Создайте новый массив, заполнив его элементами в формате "имя возраст лет/годов".

const name1 = ["Мария", "Алексей", "Елена", "Дмитрий"]
const age = [22, 31, 45, 53]

const nameAge = []

for (let i = 0; i < name1.length; i++) {
    nameAge[i] = name1[i] + ' ' + age[i] + ' ' + 'лет/годов'
}

console.log(nameAge)

// Задание 2
// Используя пройденные на занятии методы массива получите из этого массива новый массив, в котором элементы идут в обратной последовательности.
// Cделайте два решения - без и с использованием reverse()

// Вариант 1
const reversNameAge = []
let j = 0
for (let i = nameAge.length - 1; i >= 0; i--) {
    reversNameAge[j] = nameAge[i]
    j++
}

console.log('Реверс вариант 1: ', reversNameAge)

// Вариант 2
const reversNameAge1 = []
let k = nameAge.length
for (let i = 0; i < k; i++) {
    let item = nameAge.pop()
    reversNameAge1[i] = item
}

console.log('Реверс вариант 2: ', reversNameAge1)

// Вариант 3 reverse()
let copyNameAge = ["Мария", "Алексей", "Елена", "Дмитрий"]
console.log('Оригинальный массив: ', copyNameAge)
const reversNameAge2 = copyNameAge.reverse();
console.log('Реверс вариант 3: ', reversNameAge2)

// Задание 3
// Создайте пустой массив countries. Добавьте в массив следующие страны: "Франция", "Германия", "Италия" Удалите последний элемент из массива и сохраните значение в переменной. Добавьте его в начало массива. Выведите countries в консоль

let countries = ["Франция", "Германия", "Италия"]
let lastCountries = countries.pop()
countries.unshift(lastCountries)

console.log(countries)

// Задание 4
// Объявите массив colors с названиями цветов: "красный", "зеленый", "синий". Создайте массив animals с животными: "кошка", "собака", "кролик". Объедините массивы в colorsAndAnimals с помощью оператора spread Используя деструктуризацию, создайте переменные для каждого элемента нового массива с соответствующими именами переменных Выведите в консоль переменную blue и rabbit через запятую.

const colors = ["красный", "зеленый", "синий"]
const animals = ["кошка", "собака", "кролик"]

const colorsAndAnimals = [...colors, ...animals]

const [red, green, blue, cat, dog, rabbit] = colorsAndAnimals

console.log(blue + ", " + rabbit)