// Про способ объявления переменной var
// И почему не стоит ее использовать

color += ' цвет'
console.log(color)

// * 1.  Вы можете случайто проинициализировать переменную с тем же самым названием и перезаписать значение

var human = 'John'
var human = 'Jack'
// Использование let выдаст ошибку

console.log(human)

// * 2. Про hoisting (поднятие) переменной с var до ее определения js не укажет вам на ошибку. Вы будете использовать переменную и совершать с ней операции до ее инициализации.

// переменная с var до инициализации будет равна undefined

var color = 'blue'
console.log(color)

// * 3. Переменные с var - это глобальные переменные, которые видно из других блоков кода. Переменные с let и const внутри циклов и if/else  инкапсулируются и вы не имеете к ним доступ.

function isAnimal() {
    if(true) {
        var lion = 'lion'
    }
    console.log(lion)
}

isAnimal()


// Functions - функции
// Функции отличаются от процедур наличием возвращенного значения
// Функция без return возвращает undefined

// * 1. Объявление функции через function declaration
// Функции объявленные этим способом поднимаются (hoisting) и могут быть использованы до инициализации

function helloWorld(x) {
    console.log('Hello World!', x)
    return 'Hello World!' + x + '! from function'
}

let returnedFromHello = helloWorld('world')

// Вызов функции называется - call
helloWorld('javascript')

console.log(returnedFromHello)


function sum(a, b) {
    return a + b
}

console.log('Результат функции sum: ', sum(22, 18))


// * 2. Function expression

// Не получится вызвать функцию до ее объявления Function expression
// subtraction(40, 2)

const subtraction = function(a, b) {
    return a - b
}

console.log('Результат функции subtraction: ', subtraction(100, 1))

// Функции могут принимать в себя другие функции в качестве аргументов
// Здесь три параметра: два числа и функция для них
// в возвращенном значении мы вызываем функцию-аргумент
// operation - по отношению к функции calculate - это функция callback
// функция вызываемая другой функцией
function calculate(a, b, operation) {
    return operation(a, b)
}

let calcSubtraction = calculate(33, 3, subtraction)

console.log(calcSubtraction)

// * Стрелочные функции - arrow functions
// ! стрелочная функция без фигурных скобок  - возвращает значение после => и не требует return

const multiplay = (a, b) => a * b

let multipliedValue = multiplay(3, 3)

console.log(multipliedValue)

const cook = (ingrident1, ingrident2, cookingFunction) => cookingFunction(ingrident1, ingrident2)

// cook('картофель', 'шампиньоны', (a, b) => console.log('Жарю ' + a + ' и ' +b))
// пример использования шаблонных строк - используем косые кавычки
// Backtics extension для автокоррекции кавычек для синтаксиса шаблонных строк - дополнительное расширение, которое двайные кавычки меняет на косые.
cook('картофель', 'шампиньоны', (a, b) => console.log(`Жарю ${a} и ${b} в шаблонных строках!`))
