// Методы массивов

// мы уже знаем методы добавления элементов:

// push() - мутирующий, добавляет элементы в конец массива, возвращает длину нового массива
// unshift() - мутирующий, добавляет элементы в начало массива, возвращает длину нового массива
// pop() - мутирующий, удаляет элемент из конца массива, возвращает удаленный элемент
// shift() - мутирующий, удаляет элемент из начала массива, возвращает удаленный элемент

const brother = [
    { name: 'Legalas', height: 190, race: 'elf', age: 500, hasMagic: true },
    { name: 'Aragorn', height: 180, race: 'human', age: 50, hasMagic: false },
    { name: 'Ghimli', height: 50, race: 'dwarf', age: 200, hasMagic: false },
    { name: 'Gendalf', height: 200, race: 'mayar', age: 2000, hasMagic: true },
    { name: 'Frodo', height: 60, race: 'hobbit', age: 30, hasMagic: false },
]

let sam = { name: 'Sam', height: 62, race: 'hobbit', age: 29, hasMagic: false }

brother.unshift(sam)

console.log(brother)


// * метод map() - не мутирующий метод

// метод нужен для создания нового массива на основании исходного массива

// метод нужен для создания нового массива на основании исходного массива
// создать массив из имен наших героев
const names = brother.map(brother => brother.name) // [ 'Sam', 'Legalas', 'Aragorn', 'Ghimli', 'Gendalf', 'Frodo' ]

// 1. создать массив из возрастов наших героев
const ages = brother.map(el => el.age) // [ 29, 500, 50, 200, 2000, 30 ]

console.log(names)
console.log(ages)

// 2. новый массив с рассой и именем героев (строка)
const namesAndRace = brother.map(brother => brother.race + ' ' + brother.name)
console.log(namesAndRace)

// 3. новый массив с объектами, но только с избранными ключами / значениями
const namesAndrRaceObject = brother.map(el => ({ name: el.name, race: el.race }))
console.log(namesAndrRaceObject)

// 4. массив только высоких братьев
const tallBrothers = []

brother.map(brother => {
    if (brother.height >= 170) {
        tallBrothers.push(brother)
    }
})

console.log(tallBrothers)

const sizes = brother.map(brother => {
    if (brother.height >= 170) {
        return 'Big'
    }
    return 'Small'
})
console.log(sizes)

const sizes1 = brother.map(brother => brother.height >= 170 ? 'Большой' : 'Маленький')
console.log(sizes1)

// * forEach - мутирующий метод, мы можем изменять элементы исходного массива
// также как и map() принимает в себя стрелочную функцию
//! возвращенное значение - undefined, будьте осторожны и не присвойте его новому массиву

// можем состарить ьратьев на 1 год
brother.forEach(brother => (brother.age += 1))
console.log(brother)

// Перезаписали имена в верхнем регистре с помощью метода строк toUpperCase()
brother.forEach(brother => brother.name = brother.name.toUpperCase())
console.log(brother)


// * filter() - не мутирующий (создает новый массив), возвращает массив элементов, которые удовлетворяют одному и более условиям
//! если нет данных удовлетворяющих выборки - вернется пустой массив
console.log(brother.filter(el => el.age > 100))
console.log(brother.filter(el => el.age > 100 && el.hasMagic))

// * find() - не мутирующий метод, возвращает первый элемент, удовлетворяющий условию 
const human = brother.find(el => el.race === 'human')
const isMagik = brother.find(el => el.hasMagic === false)
console.log(human)
console.log(isMagik)


// * reduce() - не мутирующий метод, возвращает новый массив. Принимает стрелочну функцию и начальное значение переменной
// допустим мы хотим получить сумму возрастов всех героев
let sum = 0
for (let i = 0; i < ages.length; i++) {
    sum += ages[i]
}
console.log(sum)

const sumAges = ages.reduce((acc, curent) => acc + curent, 0)
console.log('reduce: ', sumAges)


//! вы можете вызывать методы по цепочке
const namesStr = brother
    // на первом шаге создаем массив имен братьев
    .map(el => el.name)
    // а здесь с новым массивом проводим конкатенацию элементов строк
    .reduce((acc, name) => acc + name + ', ', 'Brotherhood: ')

console.log(namesStr)