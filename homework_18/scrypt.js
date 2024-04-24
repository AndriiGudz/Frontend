// 1. Определяем какие элементы будут интерактивными.
// - объявляем их

const formElement = document.querySelector('#form')
const listElement = document.querySelector('#todo-list')

// заводим массив для хранения данных
const tasks = []

formElement.addEventListener('submit', (event) => {
    event.preventDefault()

    // забираем данные из формы
    const task = event.target.task.value
    const desc = event.target.desc.value

    // чистим список ввода
    event.target.task.value = ''
    event.target.desc.value = ''

    // добавляем данные из формы в массив + пишем новый ключ isDone с булевым значением
    // чтобы при новой итерации по списку старые элементы исчезли из DOM
    tasks.push({task, desc, isDone: false})
    
    // до итерации по массиву нужно очистить ol от элементов
    while (listElement.hasChildNodes()) {
        listElement.firstChild.remove()
    }

    
    // создаем массив объектов, итерируемся по массиву и создаем элементы
    tasks.forEach(task => {
        const li = document.createElement('li')
        // добавим input типа checkbox
        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.checked = task.isDone

        // вешаем обработчик события на чекбокс
        checkBox.onclick = () => {
            task.isDone = !task.isDone
        }
        // добавляем к li чекбокс
        li.append(checkBox)

        // создали отдельный текстовый узел, чтобы не перезаписать все содержимое li
        const textNode = document.createTextNode(`${task.task}, ${task.desc}`)

        // добавляем textNode к li
        li.append(textNode)

        // добавляем li на страницу
        listElement.appendChild(li)
    })


    // console.log(tasks)
})