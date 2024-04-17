// Object

// объект ссылочный тип данных
// в нем храняться данные в формате: ключ и значение
// ключи объекта являются строковыми значениями

// два на вид одинаковы объекта будут не равны, потому что это разные ссылки

const user = {
    name: 'John',
    age: 30,
    isMarried: false
}

const user1 = {
    name: 'John',
    age: 30,
    isMarried: false,
    'has dog': true
}

console.log(user === user1) // false

// но мы можем сравнить значения этих объектов

console.log(user.name === user1.name) // true


// * Способы обращения к ключам объекта в js

// 1. Классический через точку '.'
// обратились через точку и переписали значение
user.name = 'Ethan'
console.log(user)

console.log(user1)

// 2. Через квадратные скобки, если ключ состоит из двух слов с пробелом

console.log(user1['has dog']) // если мы хотим обратится к ключу объекта из нескольких слов с пробелом


// 3. Через квадратные скобки, если значение для ключа лежит в переменной

const key = 'firstName'

const client = {
    firstName: 'Frank',
    role: 'admin'
}

console.log(client[key])


// Мы можем создавать в одну строку объекты, ключами которых будут имена переменных 

const hobbitName = 'Bilbo'
const hasRing = false

const hobbit = {hobbitName, hasRing} // в одну строку добавляем ключи и значения

hobbit.city = 'Shire'

console.log(hobbit)

// при деструктаризации объекта мы извлекаем его значения по ключам и присваеваем эти значения соответствующим переменным
const {age, isMarried} = user
console.log(`Это возраст нашего юзера: ${age}, а это его семейное положение: ${isMarried}`)


const aragorn = {
    name1: 'Aragon',
    race: 'human',
    hasRing: false,
    age: 40
}

const {name1, race} = aragorn
console.log(name1, race)


// Метод внутри объекта

const dog = {
    name2: 'Bobik',
    bark() {
        console.log('Woof-woof!')
    }
}

// bark() - это метод внутри объекта dog
dog.bark()

console.log(dog.hasTail) // undefined

// Если обратиться к ключу от undefined - код ляжет.
// Но фреймворки, например React, предполагают, что вы можете так сделать, ожидая undefined.
// Для этого для безопасного обращения напишите (тернарный оператор) знак вопроса (?) перед точкой.
// Это позволит вам не упасть в ошибку.
const data = undefined
console.log(data?.role)


// Object.keys() - метод объекта, который возвращает нам массив из ключей объекта

const dogKeys = Object.keys(dog)
const aragornKeys = Object.keys(aragorn)
console.log(dogKeys)
console.log(aragornKeys)

// Object.values() - метод объекта, который возвращает нам массив из значений объекта
// Может использоваться для того чтобы превратить объект в массив, если вам не важно сохранить ключи

const dogValues = Object.values(dog)
const aragornValues = Object.values(aragorn)
console.log(dogValues)
console.log(aragornValues)