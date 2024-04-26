const apiContent = document.querySelector('#api-content')
const jokeElement = document.querySelector('#jokeElement');
const descriptionElement = document.querySelector('#descriptionElement');
const btnNewJoke = document.querySelector('#btn-new')

function getApi() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(res => res.json())
        .then(data => {

            // Задаем текст элементов на основе полученных данных
            jokeElement.textContent = data.setup;
            descriptionElement.textContent = data.punchline;

            // Добавляем созданные элементы в контейнер apiContent
            apiContent.appendChild(jokeElement);
            apiContent.appendChild(descriptionElement);
        })
        .catch(error => {
            console.error('Произошла ошибка:', error);
        });
}

getApi()

btnNewJoke.addEventListener('click', getApi)