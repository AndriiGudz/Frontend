// создайте функцию helloEng (используйте function expression)
// в ней два параметра - firstName, lastName
// пусть она выведет в консоль фразу "Good day, <firstName> <lastName>"
// например HelloEng('Bilbo', 'Baggins) // 'Good day, Bilbo Baggins'

function HelloEng (firstName, lastName) {
    return 'Good day, ' + firstName + ' ' + lastName
}

console.log(HelloEng('Bilbo', 'Baggins'))

// создайте функцию helloTurkish (используйте function expression)
// в ней два параметра - firstName, lastName
// пусть она выведет в консоль фразу "Merhaba, <firstName> <lastName>"
// например HelloTurkish('Bilbo', 'Baggins) // 'Merhaba, Bilbo Baggins'

function helloTurkish (firstName, lastName) {
    return 'Merhaba, ' + firstName + ' ' + lastName
}

console.log(helloTurkish('Bilbo', 'Baggins'))

//создайте универсальную функцию universalHello(firstName, lastName, greetingFunction);
// universalHello('Jack', 'Shepard', HelloEng) // 'Good day, Jack Shepard'

function universalHello(firstName, lastName, greetingFunction) {
    return greetingFunction(firstName, lastName)
}

console.log(universalHello('Jack', 'Shepard', HelloEng))

// Еще один вариант записи
const universalHello1 = function(firstName, lastName, greetingFunction) {
    greetingFunction(firstName, lastName)
}

universalHello1('Harry', 'Porter', HelloEng)

console.log(universalHello1)


// Стрелочная функция
universalHello('Angela', 'Merkel', (firstName, lastName) => console.log('Moin moin, ' + firstName + ' ' + lastName))