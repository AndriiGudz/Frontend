// ### Задание 1
// Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом.

const arrayStrigNumber = (array, index) => console.log(array[index])
arrayStrigNumber(['Hello', 'World', 'JS', 'javascript'], 2)

// Вариант с проверкой
const getElementByIndex = (arr, index) => {
    // Проверяем, существует ли элемент массива под заданным индексом
    if (index >= 0 && index < arr.length) {
        // Если существует, возвращаем элемент массива
        return arr[index];
    } else {
        // Если такого индекса нет, выводим сообщение в консоль
        console.log("No such index in array");
    }
}
const myArray = [12, 14, 3, 6, 8, 9]
console.log(getElementByIndex(myArray, 4))
console.log(getElementByIndex(myArray, 10))
