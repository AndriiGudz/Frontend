const flowersContainer = document.querySelector('#flower-container')
// console.log(flowersContainer)

async function getFlowers() {
    const res = await fetch('https://andriigudz.github.io/flowers-api/flowers.json')
    const data = await res.json()
    // код в map() будет повторяться для каждого элемента
    data.map(flower => {
        // забераем данные и кладем их в переменные
        const {name, color, description, image} = flower
        // создаем контейнер и добавляем к нему класс
        const card =document.createElement('div')
        card.classList.add('flowerCard')

        // создаем заголовок карточки и добавляем текст
        const cardHeading = document.createElement('h3')
        cardHeading.textContent = name.charAt(0).toUpperCase() + name.slice(1)
        cardHeading.classList.add('flowerCard__heading')
        // создаем параграф и добавляем описание
        const cardDescription = document.createElement('p')
        cardDescription.textContent = description
        // создаем параграф и добавляем описание цвета + стилизуем
        const cardColor = document.createElement('p')
        cardColor.textContent = `Color: ${color}`
        cardColor.style = `Color: ${color}`

        const cardImage = document.createElement('img')
        cardImage.src = image
        cardImage.classList.add('cardImg')
        card.append(cardHeading, cardDescription, cardColor, cardImage)
        // console.log(card)

        flowersContainer.append(card)

    })


}

getFlowers()