const contentApi = document.querySelector('#content-api')
const loader = document.querySelector('#loader')

const cityForm = document.getElementById('cityForm')


cityForm.addEventListener('submit', function (event) {
    event.preventDefault() // Предотвращаем отправку формы

    // Очищаем содержимое contentApi
    contentApi.innerHTML = '';
    
    // включаем loader до fetch запроса
    loader.style.display = 'block'    

  // Получаем выбранный город из выпадающего списка
  const selectedCity = document.getElementById('citySelect').value

  // Разделяем выбранное значение на долготу, широту и название города
  const [latitude, longitude, cityName] = selectedCity.split(',')


  // Запрос погоды по координатам местоположения пользователя
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
  )
    .then((response) => response.json())
    .then((weatherData) => {
      setTimeout(() => {
        // отключаем loader после загрузки данных
        loader.style.display = 'none'

        // Обработка данных о погоде
        const temperature = weatherData.current_weather.temperature
        const windspeed = weatherData.current_weather.windspeed

        const tempSym = weatherData.current_weather_units.temperature
        const windSym = weatherData.current_weather_units.windspeed

        // Создание элемента для отображения данных о погоде
        const weatherInfoElement = document.createElement('div')
        weatherInfoElement.classList.add('weatherInfoElement')
        const tempElement = document.createElement('div')
        const windElement = document.createElement('div')
        tempElement.innerHTML = `<strong>Температура:</strong> ${temperature} ${tempSym}`
        windElement.innerHTML = `<strong>Скорость ветра:</strong> ${windspeed} ${windSym}`
        weatherInfoElement.append(tempElement)
        weatherInfoElement.append(windElement)
        contentApi.appendChild(weatherInfoElement)
      }, 1000)
    })
    .catch((error) => {
      // Обработка ошибок при запросе погоды
      console.error('Ошибка при получении данных о погоде:', error)
    })
})

function toggleDropdown() {
    var menu = document.getElementById("myDropdown");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }