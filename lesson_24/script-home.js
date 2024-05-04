const contentApi = document.querySelector('#content-api')
const loader = document.querySelector('#loader')
const cardContent = document.querySelector('#cardContent')

function toggleDropdown() {
    var menu = document.getElementById("myDropdown");
    if (menu.style.display === "none") {
      menu.style.display = "block";
    } else {
      menu.style.display = "none";
    }
  }

fetch('https://get.geojs.io/v1/ip/geo.json')
    .then(response => response.json())
    .then(data => {
        // получаем данные и обрабатываем их
       
        const latitude = data.latitude
        const longitude = data.longitude

        const city = data.city;
        const country = data.country;

        // Создаем элемент для отображения данных
        const infoElement = document.createElement('div');
        // infoElement.textContent = `Широта: ${latitude}, Долгота: ${longitude}`;

        const cityElemant = document.createElement('div')
        cityElemant.innerHTML =`<strong>Город:</strong> ${city}`
        const countryElemant = document.createElement('div')
        countryElemant.innerHTML =`<strong>Страна:</strong> ${country}`

        contentApi.appendChild(infoElement);
        contentApi.appendChild(countryElemant);
        contentApi.appendChild(cityElemant);

        // включаем loader до fetch запроса
        loader.style.display = 'block'

        // Запрос погоды по координатам местоположения пользователя
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
            .then(response => response.json())
            .then(weatherData => {

                setTimeout(() => {
                    
                    // отключаем loader после загрузки данных
                    loader.style.display = 'none'
                    cardContent.style.display = 'block'
                    contentApi.style.display = 'block'
                    
                    // Обработка данных о погоде
                    const temperature = weatherData.current_weather.temperature;
                    const windspeed = weatherData.current_weather.windspeed;
                    const weatherCode = weatherData.current_weather.weathercode;
    
                    const tempSym = weatherData.current_weather_units.temperature;
                    const windSym = weatherData.current_weather_units.windspeed;
                    
                    // Создание элемента для отображения данных о погоде
                    const weatherInfoElement = document.createElement('div');
                    weatherInfoElement.classList.add('weatherInfoElement')
                    const tempElement = document.createElement('div')
                    const windElement = document.createElement('div')
                    tempElement.textContent = `Температура: ${temperature} ${tempSym}`
                    windElement.textContent = `Скорость ветра: ${windspeed} ${windSym}`
                    weatherInfoElement.append(tempElement)
                    weatherInfoElement.append(windElement)
                    contentApi.appendChild(weatherInfoElement);
    
                    const weatherDescription = decodeWeather(weatherCode)
                    const weatherDesc = document.createElement('div')
                    weatherDesc.classList.add('weatherDesc')
                    weatherDesc.append(weatherDescription)
                    weatherInfoElement.append(weatherDesc)

                }, 2000)

            })
            .catch(error => {
                // Обработка ошибок при запросе погоды
                console.error('Ошибка при получении данных о погоде:', error);
            });
        
        
    })
    .catch(error => {
        // Обрабатываем ошибку, если она возникла
        console.error('Ошибка при получении данных:', error);
    });



    function decodeWeather(code) {
        switch (code) {
            case 0:
                return 'Ясно';
            case 1:
            case 2:
            case 3:
                return 'Преимущественно ясно, переменная облачность и пасмурно';
            case 45:
            case 48:
                return 'Туман и образование инея';
            case 51:
            case 53:
            case 55:
                return 'Морось: слабая, умеренная и сильная интенсивность';
            case 56:
            case 57:
                return 'Замерзающая морось: слабая и сильная интенсивность';
            case 61:
            case 63:
            case 65:
                return 'Дождь: слабый, умеренный и сильная интенсивность';
            case 66:
            case 67:
                return 'Ледяной дождь: слабый и сильная интенсивность';
            case 71:
            case 73:
            case 75:
                return 'Снегопад: слабый, умеренный и сильная интенсивность';
            case 77:
                return 'Снежинки';
            case 80:
            case 81:
            case 82:
                return 'Дождь с прояснениями: слабый, умеренный и сильный';
            case 85:
            case 86:
                return 'Снегопады: слабый и сильный';
            case 95:
                return 'Гроза: слабая или умеренная';
            case 96:
            case 99:
                return 'Гроза с мелким и крупным градом';
            default:
                return 'Неизвестный код погоды';
        }
    }
