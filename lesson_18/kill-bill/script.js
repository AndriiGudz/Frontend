const form = document.querySelector('#form')
const personlist = document.querySelector('#person-list')
const clearBtn = document.querySelector('#clear')

function changeStatus(event) {
    if (event.target.style.textDecoration === 'line-through') {
        event.target.style.textDecoration = 'none'
    } else {
        event.target.style.textDecoration = 'line-through'
    }
}

let deathList = []

// форма по умолчанию перегружает страницу (стандартное поведение формы)
// event - переменная которая отслеживает все действия по событиям, параметры передает браузер. Название переменной может быть любым.
//! Форма отправляет данные из инпутов и делает перезагрузку
form.addEventListener('submit', (event) => {
    // обращаемся к событию через опциональный параметр event
    // убираем перезагрузку формы по умолчанию через метод - .preventDefault()
    event.preventDefault()
    console.log('форма!')
    // получаем данные из полей ввода input
    // обращаемся к event => target => NAME OF INPUT => value

    const person = {
        // создаем объект с произвольными ключами для удобства
        // в значение по ключам кладу данные из форм
        name: event.target.nickname.value.toLowerCase(),
        place: event.target.location.value.toLowerCase()
    }

    if (deathList.includes(person.name)) {
        alert('He is already on the list 🥷🥷')
    } else {
        deathList.push(person.name)
        person.name = person.name.charAt(0).toUpperCase() + person.name.slice(1)
        person.place = person.place.charAt(0).toUpperCase() + person.place.slice(1)
        console.log(deathList)
    
        // создали элемент
        const listElement = document.createElement('li')
        // добавили текст
        listElement.textContent = `${person.name}, ${person.place}`
    
        // через свойство .onclick добавляем слушатель событий по клику
        // функцию changeStatus прописали заранее
        listElement.onclick = changeStatus
        // добавили к родителю personlist
        personlist.appendChild(listElement)
    
        // чистим поля ввода в input после ввода
        event.target.nickname.value = ""
        event.target.location.value = ''
    
        // console.log(person)
    }

})


// пишем функцию для удаления элементов
function clearList() {
    // пока в родительском элементе есть дети li
    while (personlist.hasChildNodes()) {
        // удаляем первый элемент из родителя
        personlist.firstChild.remove()
    }
}

// добавляем событие на .onclick
clearBtn.onclick = clearList