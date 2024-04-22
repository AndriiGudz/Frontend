// Задание 1
// Объедините два массива героев в один и отсортируйте по возрасту

const heroes = [
    { hero: 'Iron Man', name: 'Tony Stark', age: 50, isAvenger: true },
    { hero: 'Captain America', name: 'Steve Rogers', age: 110, isAvenger: true },
    { hero: 'Thor', name: 'Thor Odinson', age: 1500, isAvenger: true }
  ];
  
  const villains = [
    { hero: 'Thanos', name: 'Thanos', age: 1000, isAvenger: false },
    { hero: 'Loki', name: 'Loki Laufeyson', age: 1052, isAvenger: false }
  ]

  // concat
  const einheim = heroes.concat(villains).sort((a, b) => a.age - b.age)

  // spred
  const einheim2 = [...heroes, ...villains].sort((a, b) => b.age - a.age)

  console.log(einheim)
  console.log(einheim2)


// Задание 2
// Замените имя героя "Captain America" на "The First Avenger" и увеличьте его возраст на 10 лет

heroes.forEach(hero => {
    if (hero.hero === 'Captain America') {
        hero.hero = 'The First Avenger'
        hero.age += 10
    }
})

console.log(heroes)

const heroes2 = heroes.map(hero => {
    if (hero.hero === 'Captain America') {
        return {...hero, hero: 'The First Avenger', age: hero.age + 10}
    }
    return hero
})

console.log(heroes2)


// Задание 3
// Напишите функцию getRandomCharacter, которая возвращает случайного персонажа в строке: Если это герой функция вернет: Congratulations! You got a hero: Iron Man! А если злодей: Attention! Thanos! Call the Avengers!

// function getRandomCharacter(arr) {
//     const rendomNumber = Math.floor(Math.random() * arr.lehght)
//     let character = arr[rendomNumber]
//     character.isAvenger ? console.log(`Congratulations! You got a hero: ${character.hero}`) : console.log(`Attention! ${character.hero} Call the Avengers!`);

//     return character
// }

// console.log(getRandomCharacter(einheim))


// Задание 4
// Создайте функцию getHeroAges(heroes), которая принимает массив героев

// Функция должна выполнить следующие действия:

// Отфильтровать героев, чьи имена начинаются с буквы "T". Отсортировать отфильтрованных героев по возрастанию их возраста. Получить массив возрастов отсортированных героев. Вывести полученный массив возрастов в обратном порядке.

function getHeroAges(heroes) {
    const filteredHeroes = heroes.filter(hero => hero.name.startsWith('T'));
    const sortedHeroes = filteredHeroes.sort((a, b) => a.age - b.age);
    const ages = sortedHeroes.map(hero => hero.age);
    const reversedAges = ages.reverse();
    console.log(reversedAges);
}

getHeroAges