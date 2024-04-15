// console.log('welcom to JS')

// через let можно переопределять значения переменной
// можно создать без значения

let x
x = 'word'
x = 'anoter word'

console.log(x)

// через const запрещено переопределять значение переменной
const fruit = 'orange'

// javascript динамически типизируемый язык
// это значит что вы можете переназначать в переменную данные другого типа

x = 42

// Примитивные типы данных: всего 7 типов
// 1. String - строка

let planet = 'Earth'
planet = 'Mercury'
planet = `Mars`

// 2. Number - число

let n1 = 9
let n2 = 8.5

// Самое большое safe число, которое может быть использовано в js
console.log(Number.MAX_SAFE_INTEGER)

// 3. Bigint - большое число

let n3 = 9n
console.log(typeof n3)

// 4. Boolean - булевле значение (логическое значени - true/false)

// рекомендуется для читабельности кода называть переменную
// с  вопросительным словом
let isDrink = false
let hasMother = true

// * 5. Undefined - неопределенный тип данных

let u1 = undefined
// например, если не задали значение переменной
let u2

console.log(u2)

// * 6. Null
let null1 = null

// * 7. Symbol

let s1 = Symbol('smth')
console.log(s1)

// * Nan - Not A Number - не отдельный тип данных, а специальное значение. Результат невыполненых математических операций

let result = 10 / 'привет'
console.log(result)

// тип Nan - это number...
console.log('тип Nan:', typeof result)

console.log(1 + 1)
console.log('1' + 1)

// * Преобразование типов:

// 1. Преобразование в строку

// неявное
let s2 = 5 + ""
console.log(s2, '- это: ', typeof s2)

// явное
let s3 = String(false) // мы превратили булевое значение в строку
console.log(typeof s3)

// 2. Преобразование в числа
console.log('// 2. Преобразование в числа')

// неявное
let s4 = + '42'
console.log(typeof s4)

// явное
let s5 = Number('777')
console.log(typeof s5)

let s55 = Number('777klsdj')
// Number() - если встретит не превращаемые в число символы - выведе NaN

// parseInt - будет превращать в число символы по не встретит непревращаемый символ
let s6 = parseInt('9999usd')
console.log(s6, ' - это', typeof s6)

// 3. Логическое преобразование

// число в boolean

// 0 и NaN будет равен false
let l5 = Boolean(0)
console.log(l5)

// Положительные и отрицательные числа будут равен true
let l6 = Boolean(5)
console.log(l6)

// Операторы:

// Арифметические.
let l9 = 12 + 48 // + сложение
let l10 = 10 - 2 // - вычитание
let l11 = 4 * 2 // * умножение
let l12 = 4 / 2 // / деление

let l13 = 9 % 4 // % отсаток от целочисленного деления
let l14 = 9 ** 4 // ** возведение в степень

// Сравнение.

// >, <, >=, <=

// coercion - неявное преобразование типов

// == - это равенство с приведением типов
console.log(9 == '9')

// === - это строгое равенство без приведения типов
console.log(9 === '9')
console.log('home' === 'home')

// знак неравенства !==
console.log(9 !== '9')