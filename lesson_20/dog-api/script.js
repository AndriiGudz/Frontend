// Вариант 1

fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json()) 
    .then(data => {
        // Создаем элемент img
        const dogImage = document.createElement('img');
        // Устанавливаем атрибут src для изображения из данных API
        dogImage.src = data.message;
        // Добавляем класс для стилизации, если это необходимо
        dogImage.classList.add('dog-image');
        // Находим контейнер, куда мы хотим добавить изображение
        const container = document.querySelector('#content');
        // Добавляем изображение в контейнер
        container.appendChild(dogImage);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });

// Вариант 2
// объявили переменные и присвоили ссылку на элементы
const dogApi = document.querySelector('#apiImg')

// делаем fetch запрос на получение данных
fetch('https://dog.ceo/api/breeds/image/random')
    // обрабатываем данные через метод json()
    .then(res => res.json()) 
    .then(data => {
        // создаем картинку через .createElement('img')
        const img = document.createElement('img')
        // если картинка не зогрузится - мы увидим этот текст
        img.alt = 'dog image'
        // адрес картинки из АПИ
        img.src = data.message
        // добавляем класс для стилизации
        img.classList.add('dog-img')
        // добавляем картинку к контейнеру
        dogApi.append(img)
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });