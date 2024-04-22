//* Наследование в JS

// прототипное наследование нативное для js
// пример прототипного наследования

const bicycle = {
    brand: 'Bergamot',
    price: 2000,
    drive() {
        console.log('Driving bicycle ... 🚲')
    }
}

// на основании bicycle мы создали mountainBike 
const mountainBike = {
    __proto__: bicycle, // прототип для горного велосипеда у нас является bicycle
    price: 300,
    speeds: 7
}

console.log(bicycle.price)
bicycle.drive()

mountainBike.drive()
console.log(mountainBike.price)


// Классовое наследование
// Синтаксический сахар для прототипов

// мы создаем класс
class  Animal {
    constructor(age, name, color) {
        this.age = age
        this.name = name
        this.color = color
    }

    info() {
        console.log(`Меня зовут ${this.name}. Я цвета ${this.color}.`)
        return 'Если не сделаем return - то получим в консоле undefined'
    }
}

// создаем экземпляр класса Animal
const monkey = new Animal(7, 'Цезарь', 'Monkey color')

console.log(monkey.info())


// inheritance - отношение между классами
// extends - способ наследования

class Panda extends Animal {
    constructor(age, name, color, weight) {
    // super - отвечает за наследование от конструктора родителя
    super(age, name, color)
    this.weight = weight
    }

    sleep() {
        console.log('Z-z-z-z-z')
    }

    eat() {
       this.weight += 1
    }
}

// мы передаем свойства в экземпляр класса в том же порядке, в котором передавали их в конструктор
const po = new Panda(5, 'Po', 'Black and white', 50)

po.info()

po.eat()
po.eat()
po.eat()
console.log(po.weight)