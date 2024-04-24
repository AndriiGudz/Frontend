//! Promise - обещание, специальный вид объектов


function getSix() {
    setTimeout(() => {
        return 6
    }, 3000)
}


let x = getSix()
console.log(x) // undefined синхронные код сработает раньше асинхронного

function getSeven() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(7)
        }, 3000)
    })
}

const promise = getSeven()
console.log(promise) // так обработать не полчится, получим ответ - Promise { <pending> } - ожидание

// специальный вид объектов Promise - приходит как ответ на результат ассинхронного запроса
// может находиться в трех состояниях =>
// <Pending> - ожидание
// <Fulfilled> - успех
// <Rejected> - отказ

//* как мы обрабатываем полученный Promise
// успешный случай из Promise - мы обрабатываем с помощью метода .then()
promise.then(data => {
    console.log('наконец-то наши данные!')
    console.log(data)
})


// пример Promise с обработчиком ошибки

function getAgeOfUser(username) {
    return new Promise((resolve, reject) => {
        if (username === 'John') {
            setTimeout(() => {
                resolve(`Age of ${username} is 18`)
            }, 2000)
        } else {
            setTimeout(() => {
                reject(new Error(`Wrong username: ${username}! Access denied!`))
            }, 4500)
        }
    })
}

getAgeOfUser('Anton')
    .then(data => console.log(data))
    .catch(error => console.log(error))