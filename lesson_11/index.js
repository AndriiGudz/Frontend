// * Массивы Arrays
// Массивы в JS динамические
// два способа создать массив

const arr1 = [] // предпочтительный способ
const arr2 = new Array()

// создание массива со значениями
const numbers = [1, 2, 5, 66]
const fruits = ['apple', 'orange', 'pear', 'melon']
const party = ['human', 42, undefined, ['man', 'woman']]
console.log(party)

// получение элементов из массива по индексам
console.log(fruits[0]) // первый элемент массива

// если обратиться к несуществующему индексу в массиве - придет undefined
console.log(fruits[10])

// перезапись, изменение элемента в массиве под номером 3
fruits[3] = 'watermelon'
console.log(fruits)

// цикл for

// указываем переменную итератор и задаем ей значение
// пишем условие выхода из цикла
// приращиваем на каждом кругу приращивает по 1 к числу итератору
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]) // мы выводим по очереди все элементы массива
}


// * цикл while loop

// пока выполняется условие в круглых скобках, будет происходить действие в фигурных
// важно указать условие выхода, которое случится рано или поздно - иначе вы попадаете в infinity loop

let i = 0

while (i <= 10) {
    console.log(i)
    // если бы не написали строчку ниже, мы бы попали в бесконечный цикл
    i++
}

// еще немного про строки и как получать символы по индексу

let loop = 'infinity loop'
console.log(loop[1]) // выводим второй элемент массива

// методом slice мы отрезаем символы строки / массива до нужного индексса
// через конкатенацию приращиваем 
let newLoop = 'I' + loop.slice(1)
console.log(newLoop)

// * методы массивов: добавление и удаление элементов
// методы делятся на мутирующие и немутирующие
// первые изменяют исходный массив, вторые нет

// * 1. Мутирующие метод push() - добавляет элемент в конец массива

const students = ['Marina', 'Alex', 'Ira', 'John']

// при этом возвращенное значение - это число, длинна нового массива
// ! не ошибитесь и не заведите переменную под это значение с рассчетом что вам придет новый массив

let returnedValue = students.push('Harry Potter')

console.log(returnedValue)
console.log(students)

// * 2. Мутирующие метод pop() - удаляет элемент из конца массива

students.pop() // удаляет последний массив
let reternPop = students.pop() // удаляем еще один массив
console.log(reternPop) // печатаем элемент, который удаляем
console.log(students)

// * 3. Unshift() - добавляет элемент в начало массива, мутирующий метод

students.unshift('Luke Skywalker')
console.log(students)

// * 4. Shift() - удаляет элемент в начале массива, мутирующий метод
students.shift()
console.log(students)



// * Spread syntax

// метод копирования одномерных, не вложенных массивов

const berries = ['blueberry', 'watermelon']
// можно забирать элементы из исходного массива, добавляя новые
const berries2 = ['strawberry', ...berries, 'raspberry']
// можно объединить два и более массивов в один
const berries3 = [...berries, ...berries2]

console.log(berries2)
console.log(berries3)

// * Деструктуризация массивов
// Это способ в одну строчку: объявить новые переменные, забрать данные из массива и положить их в новые переменные
// с массивами деструктуризация работает по индексу

let cities = ['Berlin', 'Hamburg', 'Leipzig', 'Potsdam']

const [berlin, hamburg, leipzig, postdam] = cities
// если вы пропускаете элементы и не даете под них переменные, вы пропускаете их, но сколько пустых мест - столько и запятых
const [first, , , last] = cities

console.log(first)
console.log(last)

console.log('hamburg ==> ', hamburg)