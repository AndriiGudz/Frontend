console.log('hello, DOM!')

// при объявлении переменной через let вы можете переназначить значение
let language = 'javascript'
console.log('in language variable ====>>>', language)

language = 'java'
console.log(language)

// при объявлении переменной через const (константа) - переприсвоить значение не получится
const theme = "DOM"

// theme = 10


// DOM - Document Object Model

// document.getElementById - метод поиска элемента по id
// для удобства переиспользования мы кладем элемент в переменную

const btnPush = document.getElementById('btn-push')
console.log(btnPush)

// document.getElementsByTagName - возвращает массив элемента по тегу
const heading = document.getElementsByTagName('h1') [0]
console.log(heading)

const box = document.getElementById('box')
const btnBoxChanger = document.querySelector('#btn-boxChange')

const btnCreateElement = document.getElementById('btn-createElement')

// метод .addEventListener() принимает в себя два параметра: 
// 1 - строка с указанием типа события.
// 2 - стрелочная функция описывающая действия, которые произойдут, когда собитие случится.
btnPush.addEventListener('click', () => {
    heading.style.color = 'red'
    heading.style.backgroundColor = 'orange'
    console.log('кнопка сработала!, заголовок изменил цвет!')
})


btnBoxChanger.addEventListener('click', () => {
    box.className = 'box'
})


btnCreateElement.addEventListener('click', () => {
    // создали новую переменную с тегом <p>
    const newElement = document.createElement('p')
    // добавили текст
    newElement.innerText = 'Кажется, я начинаю понимать DOM'
    newElement.id = 'new-paragraph'
    newElement.className = 'new-paragraph'
    document.body.appendChild(newElement)
})

console.log('document ==> ', document)

