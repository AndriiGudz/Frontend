// Задание 1
// Используйте методы массивов
// Создайте на основе старого массива новый массив объектов по образу:
// [{ name: "Luke Skywalker", isJedi: true }, {name: "Han Solo", isJedi: false}...]

const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
]

console.log('Задание 1: ', starWarsHeroes.filter(el => el.age % 10 === 5))

// Задание 1.2
// Создайте новый массив с джедаями младше 40 лет

console.log('Задание 2: ', starWarsHeroes.filter(el => el.age <= 40  && el.isJedi))

// Задание 1.3
// Посчитайте возраст всех джедаев
const ages = starWarsHeroes.map(el => el.isJedi && el.age)
console.log('Задание 3: ', ages.reduce((acc, curent) => acc + curent, 0))

// Задание 1.4
// Повысьте возраст героев на 10 лет

starWarsHeroes.forEach(wars => (wars.age += 10))
console.log('Задание 4: ', starWarsHeroes)

// Задание 1.5
// Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }

starWarsHeroes[1] = {name: "Darth Vader", isJedi: false, age: 50}
console.log('Задание 5: ', starWarsHeroes)

// Задание 1.6
// Создайте массив с именами героев, у которых возраст больше 30 лет, преобразуйте каждое имя в верхний регистр и отфильтруйте имена, которые начинаются с буквы "A".
// используйте .startsWith()

const newArray = starWarsHeroes.filter(el => el.age > 30);
const newArray1 = newArray.map(el => el.name.toUpperCase()).filter(name => name.startsWith("A"));

console.log('Задание 6: ', newArray1);

// Задание 1.7
// Выведите на экран сообщение для каждого героя, указывающее на его статус джедая, и добавьте к каждому сообщению его возраст.
// Используйте тернарный оператор

// Образец:
// 'Anakin Skywalker is a Jedi. Age: 25' 'Han Solo is not a Jedi. Age: 35'

