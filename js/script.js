

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const bannersRemove = document.querySelectorAll ('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        films = document.querySelector('.promo__interactive-list');
    


    function arr (arr) {
        arr.forEach(item => {
            item.remove();
        });
    }
    
    arr(bannersRemove);
    
    genre.textContent = 'Драма';
    poster.style.backgroundImage = "url('img/bg.jpg')";
    
    films.innerHTML = '';
    
    function addMovie (movie) {
        movie.forEach((film, i) =>{
            films.innerHTML += `
                <li class="promo__interactive-item">${i+1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
    }
    addMovie(movieDB.movies);
       
    
    let blockFilms =  document.querySelectorAll('.promo__interactive-list li');
    
    blockFilms.forEach(li => {
        li.style.maxHeight = "18px";
    });
});







