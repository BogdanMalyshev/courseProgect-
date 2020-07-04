/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const banners = document.querySelectorAll ('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    films = document.querySelector('.promo__interactive-list'),
    filmsName = document.querySelector('.promo__interactive-item');

banners.forEach(item => {
    item.remove();
});
genre.textContent = 'Драма';
poster.style.backgroundImage = "url('img/bg.jpg')";

films.innerHTML = '';
function callbackFunction (callback){
    movieDB.movies.forEach((film, i) =>{
        films.innerHTML += `
            <li class="promo__interactive-item">${i+1}. ${film}
                <div class="delete"></div>
            </li>
        `;
    });
    console.log('Yes');
    callback();
};
callbackFunction(function(){
    filmsName.style.color = 'red';
    console.dir(filmsName);
});




