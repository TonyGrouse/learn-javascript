"use strict";

// Практика №4 - консольное приложение


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?", "");
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count <= 10 && personalMovieDB.count >= 0) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count <= 30 && personalMovieDB.count > 10) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Один из последних просмотренных фильмов?", ""),
                b = prompt("На сколько оцените его?", "");
    
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            } 
        }
    },
    showMyDB: function () {
        const privatAnsw = +prompt("Вы хотите чтобы ваши фильмы кто-то видел?(1 - да, 2 - нет)");
        if (privatAnsw == 2) {
            personalMovieDB.privat = true;
        }else {
            personalMovieDB.privat = false;
        }
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++){
            let genres = prompt(`Введите ваши любимые жанры через запятую:`).toLowerCase();
            
            if (genres == '' || genres == null) {
                i--;
            } else{
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }
        personalMovieDB.genres.forEach ((name, num) => {
            console.log(`Любимый жанр ${num + 1} - это ${name}`);
        });
    },
};
// personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.showMyDB();
// personalMovieDB.writeYourGenres();
alert('sdgfdf');