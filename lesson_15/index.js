// * Методы массивов: part 2

// * методы добавления элементов:

// push() - мутирующий, добавляет элементы в конец массива, возвращает длину нового массива
// unshift() - мутирующий, добавляет элементы в начало массива, возвращает длину нового массива
// pop() - мутирующий, удаляет элемент из конца массива, возвращает удаленный элемент
// shift() - мутирующий, удаляет элемент из начала массива, возвращает удаленный элемент

// метод map() - не мутирующий метод, нужен для создания нового массива на основании исходного массива
// forEach() - мутирующий метод, мы можем изменять элементы исходного массива, возвращает undefined
// filter() - не мутирующий (создает новый массив), возвращает массив элементов, которые удовлетворяют одному и более условиям
// find() - не мутирующий метод, возвращает первый элемент, удовлетворяющий условию
// reduce() - не мутирующий метод, возвращает новый массив. Принимает 2 аргумента - стрелочну функцию и начальное значение переменной.

// * 1. slice() - не мутирующий метод (удаляет/вырезает элементы), который возвращает новый массив элементов. Принимает 2 параметра:
// - индекс элемента с которого отрезает
// - индекс элемента до котого отрезает (не включительно)
const names = ['Frodo', 'Sam', 'Pipin', 'Merry', 'Boromir', 'Faramir']
// три первых
const namesSliced = names.slice(0, 3)
// два в середине
const merryPipin = names.slice(2, 4)
// два последних с конца
const boromirFaramir = names.slice(4, 6)
const boromirFaramir1 = names.slice(-2, names.length) // оставить два последних элемента
// все кроме двух последних
const lastTwo = names.slice(0, -2)

console.log('три первых: ', namesSliced)
console.log('два в середине: ', merryPipin)
console.log('два последних с конца: ', boromirFaramir)
console.log('два последних с конца, через длину массива: ', boromirFaramir1)
console.log('все кроме двух последних: ', lastTwo)


// * 2. splice() - мутирующий метод для массивов (удаляет/вырезает элементы). Принимает два параметра:
// - индекс откуда
// - количество вырезаемых элементов

//! Если не указать второй параметр, то удаляться все элементы на чиная с указанного индекса.
console.log(names)
// так удалили 2 элемента 
// names.splice(1, 2)
console.log('Метод splice(): ', names)

// так удаляем 3 последних значений (со знаком минус - ). Удаляем элементы с конца
// names.splice(-3)
console.log('Метод splice(-3): ', names)


// * 3. sort() - мутирующий метод, сортирует элементы массива (учитывает регистр). Возвращает новый массив отсортированных элементов и сортирует исходный. 

console.log(names)
names.sort()
console.log('Метод sort(): ', names)
console.log(names.sort().reverse()) // сортировка в обратном порядке

// * метод сортировки для чисел
//! по умолчанию сортирует как строки
// что метод работал коректно, ему нужно передать функцию сортировки
const numbers = [1, 3, 100, 9, 7, 4, 22]
// console.log(numbers.sort())
// сортировка по возрастанию
console.log(numbers.sort((a, b) => a - b))
// сортировка по убыванию
console.log(numbers.sort((a, b) => b - a))

// * join() - объединяет массиву в строку. Принимает параметр-разделитель, строковое значение
console.log(names.join(' и еще этот '))



// * split - не мутирующий метод для СТРОК. Вы передаете разделитель строку аргументом. Возвращает новый массив
let heroes = 'Frodo, Sam, Pipin, Merry, Boromir, Faramir, Tom Bombardir'
let sauron = 'Sauron'
const heroesArr = heroes.split(', ')
console.log(heroesArr)

let reversStr = heroes.split(', ').reverse().join(', ')
console.log(reversStr)

// перевернули Saurona задом на перед
let reversSauron = sauron.toLowerCase().split('').reverse().join('')
console.log(reversSauron)


// * slice() - работает для строк.
// - первый параметр - индекс с которого мы вырезаем (ВКЛЮЧИТЕЛЬНО)
// - второй параметр - индекс по который вырезаем (НЕ ВКЛЮЧИТЕЛЬНО)
const newHeroes = heroes.slice(0, -5)
console.log(heroes)
console.log(newHeroes)