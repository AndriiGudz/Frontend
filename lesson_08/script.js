window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var navElement = document.querySelector('.header__row-pageheader');
    if (scrollTop > 0) {
        navElement.classList.add('visible'); // Добавляем класс, когда страница прокручена
    } else {
        navElement.classList.remove('visible'); // Удаляем класс, когда страница в начале
    }
});