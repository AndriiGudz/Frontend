// Задание 1
// Создайте классы: Plant, Rose.
// Роза должна наследовать Растение. Пусть у растения будут поля:
// рост,
// возраст.
// И метод grow, который увеличивает его рост на 10 см.

// У розы должно быть поле - количество бутонов (numberOfFlowers). Создайте объект класса розы, вызовите метод.

class Plant {
    constructor(height, age) {
        this.height = height
        this.age = age
    }

    grow() {
        this.height += 10
    }

    info() {
        console.log(`Я растение, мой возраст ${this.age}, мой рост ${this.height}.`)
    }
}

class Rose extends Plant {
    constructor(height, age, numberOfFlowers) {
        super(height, age)
        this.numberOfFlowers = numberOfFlowers
    }

    infoRose() {
        console.log(`Я Роза, мой возраст ${this.age}, мой рост ${this.height}, у меня ${this.numberOfFlowers} бутонов.`)
    }
}

const newRose = new Rose(30, 2, 5)
newRose.infoRose()

newRose.grow()
newRose.grow()
newRose.grow()

newRose.infoRose()