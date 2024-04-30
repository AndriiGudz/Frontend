const formItems = document.querySelector('#formItems')
const content = document.querySelector('#content')
const productList = document.querySelector('#productList')
const loader = document.querySelector('#loader')

formItems.addEventListener('submit', (e) => {
  e.preventDefault()
  const amount = e.target.amount.value
  e.target.amount.value = ''

  // прежде чем добавить новые элементы мы сначала очищаем контейнер от элементов, которые остались с предыдущего запроса
  while (productList.firstChild) {
    productList.removeChild(productList.firstChild)
  }

  // проверяем есть ли ошибка на странице
  const error = document.querySelector('.error')
  // и если ошибка есть, мы ее удаляем
  if (error) {
    content.removeChild(error)
  }

  // проверяем ввел ли пользователь число от 0 до 20
  if (amount > 0 && amount <= 20) {
      
      // включаем loader до fetch запроса
      loader.style.display = 'block'
    
      fetch(`https://fakestoreapi.com/products?limit=${amount}`).then((res) =>
        res.json().then((data) => {
          setTimeout(() => {
            // убираем loader
            loader.style.display = 'none'
            // показываем контент
            content.style.display = 'block'
    
            data.map((item) => {
              // создаем карточку
              const itemCard = document.createElement('section')
              itemCard.classList.add('itemCard')
              // наполняем карточку контентом
              const itemTitle = document.createElement('h4')
              itemTitle.textContent = item.title
              const desc = document.createElement('p')
              desc.textContent = item.description
              const img = document.createElement('img')
              img.src = item.image
              img.classList.add('cardImage')
              // добавляем элементы карточки
              itemCard.append(itemTitle, img, desc)
              productList.append(itemCard)
            })
          }, 2000)
        })
      )

      // если произошла ошибка то мы не заходим в блок .then() а переходим к блоку .catch()
      .catch(error => {
        content.style.display = 'block'
        loader.style.display = 'none'
        const serverError = document.createElement('p')
        serverError.style.color = 'red'
        serverError.textContent = `Ошибка на сервере! ${error.message}`
        content.append(serverError)
      })

  } else {
    content.style.display = 'block'
    const errorMessage = document.createElement('p')
    errorMessage.style.color = 'orange'
    errorMessage.classList.add('error')
    errorMessage.textContent = 'Ошибка ввода!!! Введите число от 0 до 20'
    content.append(errorMessage)
  }

})
