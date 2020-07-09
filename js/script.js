
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

    const favoriteMovieDB = [];
    
    const bannersRemove = document.querySelectorAll ('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        genre = poster.querySelector('.promo__genre'),
        films = document.querySelector('.promo__interactive-list'),
        filmsList =  document.querySelectorAll('.promo__interactive-list li'),
        addForm = document.querySelector('form.add'),
        form = document.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');
        
    
        

    const sortArr = (arr) => {
        arr.sort();
    };


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
       
    function newStyleForList (list){
        list.forEach(li =>{
            li.style.maxHeight = "18px";
        });
    }
    newStyleForList(filmsList);
    

    addForm.addEventListener('submit', (event)=>{

        let formValue = form.value,
        favorite = checkbox.checked;

        event.preventDefault();
        if (formValue.length >22) {
            formValue = `${formValue.substring(0,18)}...`;
        }

        

        if(formValue){
        movieDB.movies.push(formValue);
        addMovie(movieDB.movies);
        createMovieList(movieDB.movies, films);

        if(favorite){
            favoriteMovieDB.push(formValue);
            console.log(favoriteMovieDB);
            console.log("Любимый фильм!");
        }

        event.target.reset();
        }
        
    });



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







