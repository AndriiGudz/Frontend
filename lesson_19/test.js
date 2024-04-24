function isNumber(num) {
    return new Promise((resolve, reject) => {
        if (typeof num === 'number') {

            if (num % 2 === 0) {
                setTimeout(() => {
                    resolve(`${num} - четное число!`)
                }, 5000)
            } else {
                setTimeout(() => {
                    resolve(`${num} - нечетное число!`)
                }, 5000)
            }
        } else {
            setTimeout(() => {
                reject('Ошибка! Функция принимает только числа!')
            }, 3000)
        }

    })
}

isNumber(10)
    .then(data => console.log(data))
    .catch(er => console.log(er))