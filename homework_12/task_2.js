// ### Задание 2 *
// Создайте функцию, которая бы принимала бы следующие параметры:
// - код погоды
// - функция decode, которая дает расшифровку погоды по коду.

// Функция должна возвращать строку, описывающую погоду.
// ### Таблица соответствия код-описание:
//  - SQ – шквал
//  - PO – пыльный вихрь
//  - FC - торнадо
//  - BR – дымка (видимость от 1 до 9 км)
//  - HZ – мгла (видимость менее 10 км)
//  - FU – дым (видимость менее 10 км)
//  - DS - пыльная буря (видимость менее 10 км)
//  - SS - песчаная буря (видимость менее 10 км)

// Подсказка: удобно использовать в одном из методов switch-case:
// ```
// switch (expression) {
//     case value1:
//         <код>
//     case value2:
//         <код>
// // …
//     case valueN:
//         <код>
//     default:
//         <код>
// }
// ```


function describeWeather(weatherCode, decode) {
    // Вызываем функцию decode, чтобы получить расшифровку погоды
    const weatherDescription = decode(weatherCode);

    // Возвращаем строку, описывающую погоду
    return "Погода сейчас: " + weatherDescription;
}

// Функция decode для расшифровки погоды по коду
function decodeWeatherCode(code) {
    switch (code) {
        case "SQ":
            return "шквал";
        case "PO":
            return "пыльный вихрь";
        case "FC":
            return "торнадо";
        case "BR":
            return "дымка (видимость от 1 до 9 км)";
        case "HZ":
            return "мгла (видимость менее 10 км)";
        case "FU":
            return "дым (видимость менее 10 км)";
        case "DS":
            return "пыльная буря (видимость менее 10 км)";
        case "SS":
            return "песчаная буря (видимость менее 10 км)";
        default:
            return "Неизвестный код погоды";
    }
}

const weatherCode = "HZ";
console.log(describeWeather(weatherCode, decodeWeatherCode));
