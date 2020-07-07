/* Задания на урок:
1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.
2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"
5) Фильмы должны быть отсортированы по алфавиту */
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
    
    
    
    function addMovie (movie) {
        films.innerHTML = '';
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

    const addForm = document.querySelector('.add button');
    const form = document.querySelector('.adding__input');




    addForm.addEventListener('click', ()=>{
        let formValue = form.value;
        event.preventDefault();
        if (formValue.length >22) {
            formValue = `${formValue.substring(0,18)}...`;
        }

        movieDB.movies.push(formValue);
        console.log(movieDB.movies);
        addMovie(movieDB.movies);
        createMovieList(movieDB.movies, films);

        form.target.reset();
        
    });



    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    createMovieList(movieDB.movies, films);
    
});







