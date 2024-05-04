

const loader = document.querySelector('#loader')
const contentApi = document.querySelector('#content-api')
const main = document.querySelector('main')

// Включаем loader
loader.style.display = 'block'


setTimeout(() => {
    fetch('https://andriigudz.github.io/cities/cities.json')
      .then((response) => response.json())
      .then((data) => {
        data.map(cityData => {
          const { city, latitude, longitude, description, image } = cityData
    
          // Создаем элемент карточки
          const infoCard = document.createElement('div')
          infoCard.classList.add('info-card') // Добавляем класс для стилизации

          // Запрос погоды по координатам местоположения пользователя
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
            .then((response) => response.json())
            .then((weatherData) => {

                // Обработка данных о погоде
                const temperature = weatherData.current_weather.temperature
                const windspeed = weatherData.current_weather.windspeed

                const tempSym = weatherData.current_weather_units.temperature
                const windSym = weatherData.current_weather_units.windspeed
                
                
                // Создаем элементы для отображения данных о городе
                const cityTitle = document.createElement('h2')
                cityTitle.textContent = `🌈 ${city}`
          
                const cityCoords = document.createElement('p')
                cityCoords.textContent = `Широта: ${temperature}, Долгота: ${longitude}`

                const tempElement = document.createElement('p')
                const windElement = document.createElement('p')
                tempElement.innerHTML = `🌡️ <strong>Температура:</strong> ${temperature} ${tempSym}`
                windElement.innerHTML = `🍃 <strong>Скорость ветра:</strong> ${windspeed} ${windSym}`
          
                const cityDescription = document.createElement('p')
                cityDescription.classList.add('cityDescription')
                cityDescription.textContent = description
          
                const cityImage = document.createElement('img')
                cityImage.classList.add('imgStyle')
                cityImage.src = image
                cityImage.alt = city
          
                // Добавляем созданные элементы в карточку
                infoCard.appendChild(cityTitle)
                infoCard.appendChild(tempElement)
                infoCard.appendChild(windElement)
                infoCard.appendChild(cityImage)
                infoCard.appendChild(cityDescription)
          
                // Добавляем карточку на страницу
                main.appendChild(infoCard)

             })
             .catch((error) => {
                // Обработка ошибок при запросе погоды
                console.error('Ошибка при получении данных о погоде:', error)
              })

    
        })
    
        // Отключаем loader после загрузки всех данных
        loader.style.display = 'none'
      })
      .catch((error) => {
        // Обрабатываем ошибку, если она возникла
        console.error('Ошибка при получении данных:', error)
      })

}, 2000)

function toggleDropdown() {
    var menu = document.getElementById("myDropdown");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }