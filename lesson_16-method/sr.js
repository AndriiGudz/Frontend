// напишите функцию, которая принимает массив элементов и элемент, который нужно удалить из массива
// функция должна вернуть массив без удаленного элемента
// подумайте про то, чтобы если такого элемента в массиве нет - функция работала корректно
// если такого элемента нет - выведите в консоль (‘no such element in array’)

const str = ['hello', 'world', '123', 'javascript']

function deletElement(arr, delElem) {
    const index = arr.indexOf(delElem);
    if (index !== -1) {
        arr.splice(index, 1);
        return arr;
    } else {
        console.log('no such element in array');
        return arr;
    }
}

console.log(deletElement(str, '123'))