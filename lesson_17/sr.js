/// создайте объект vehicle с полями:

// - speed значение 40
// - capacity значение 4
// - и методом go() который выводит в консоль "Br-br-br-br!"

// создайте на основе:

// jeep() - со вместимостью 5, скорость 60
// numberOfDoors() - 2


// вызовите метод go() у jeep
// * роздайте метод accelerate() который увеличивает скорость на 5км
// ** и метод stop() который меняет скорость на 0
// *** последние два метода внутри vehicle


const vehicle = {
    speed: 40,
    capacity: 4,
    go() {
        console.log('Br-br-br-br!')
    },
    accelerate() {
        this.speed += 5
    },
    stop() {
        this.speed = 0
    }
}

const jeep = {
    __proto__: vehicle,
    capacity: 5,
    speed: 60,
    numberOfDoors: 2
}

jeep.go()
jeep.accelerate()
console.log(jeep.speed)


class Alcohol {
    constructor(title, strength, volume) {
    this.title = title
    this.strength = strength
    this.volume = volume
    }

    drink() {
        console.log(`Приятно выпить ${this.title}.`)
    }

    reduce() {
        this.volume -= 0.1
    }
}

class Cognac extends Alcohol {
    constructor(title, strength, volume, age, country) {
        super(title, strength, volume)
        this.age = age
        this.country = country
    }
}

class Martini extends Alcohol {
    constructor(title, strength, volume, sugarAmount) {
        super(title, strength, volume)
        this.sugarAmount = sugarAmount
    }
}

const newCognac = new Cognac('Ararat', '40%', 0.7, 5, 'Armenia')
const newMartini = new Martini('Bianca', '18%', 0.7, '5%')

newCognac.drink()
newMartini.drink()

newMartini.reduce()
console.log(newMartini.volume)