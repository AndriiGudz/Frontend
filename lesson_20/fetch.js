// fetch запрос
// с помощью fetch мы посылаем НТТР запросы на получение информации с сервера
// чтобы дождаться этой информации - нам придется обработать promise

// JSON
// JavaScript Object Notation
// Используется для хранения информации в парах: ключ - значение


// API
// application programming interface
// интерфейс для взаимодействия с программой


// Делаем наш первый fethc запрос
// Делаем запрос на внешний АРI
fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) // обрабатываем полученный json через метод json()
    .then(data => console.log(data)) // обрабатываем promise, забираем данные и выводим в консоль

// console.log()