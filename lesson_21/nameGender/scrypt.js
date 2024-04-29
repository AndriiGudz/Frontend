const genderForm = document.querySelector('#genderForm')
const answer = document.querySelector('#answer')

genderForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const nickname = event.target.nickname.value
    event.target.nickname.value = ''
    // мы передаем fetch запрос с параметром name и со значением из переменной nickname
    fetch(`https://api.genderize.io?name=${nickname}`)
        .then(res => res.json())
        .then(data => {
            // достаем данные из деструктаризации
            let {count, name, gender, probability} = data
            let emoji = gender === 'male' ? '👨' : '🧔‍♀️'
            name = name.toLowerCase()
            name = name.charAt(0).toUpperCase() + name.slice(1)
            answer.textContent = `${emoji} - Name: ${name}, Gender: ${gender}, Probability: ${probability}`
        })

})