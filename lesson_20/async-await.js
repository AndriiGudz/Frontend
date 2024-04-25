//* Ассинхронность, часть 2

function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Tom Cruise')
        }, 2000)
    })
}

getName().then(data => console.log(data))


// Async / Await - аналаг синтаксиса с цепочкой из .then и .catch
// Используется для обработки Promise


//! Пишите ключевое слово - async - перед объявлением функции
//! await - пишите перед получением асинхронных данных
async function func() {
    const responce = await getName()
    console.log(responce + ' -- из async / await')
}

func()


function getFiveVer1() {
    return new Promise(resolve => {
        resolve(5)
    })
}

function getSix() {
    return 6
}

getFiveVer1().then(responce => console.log(responce))

console.log(getSix())