"use strict";


const personalMovieDb = {
   
    count: 0,
    movies: {
    },
    actors: {
    },
    genres: [
    ],
    private: true,

    start: function() {
       personalMovieDb.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
       while (personalMovieDb.count == '' || personalMovieDb.count == null || isNaN(personalMovieDb.count)) {
           personalMovieDb.count = prompt("Сколько фильмов вы уже посмотрели?", "");
       }
       
   },
  
   
   rememberMyFilms: function () {
       for (let i = 0; i < 2; i++) {
           const a = prompt("Один из последних просмотренных фильмов?", ""),
               b = prompt("На сколько оцените его?", "");

           if (a != null && b != null && a != '' && b != '' & a.length < 50) {
               personalMovieDb.movies[a] = b;
               console.log('done');
           } else {
               console.log('error');
               i--;
           }
       }
   },

   detectPernonalLevel: function () {
       if (personalMovieDb.count < 10) {
           console.log("Просмотрено довольно мало фильмов");
       } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
           console.log("Вы классический зритель");
       } else if (personalMovieDb.count >= 30) {
           console.log("Вы киноман");
       } else {
           console.log('Произошла ошибка');
       }
   },


   toggleVisibleMyDB: function() {
       if(personalMovieDb.private) {
           personalMovieDb.private = false;
       } else {
           personalMovieDb.private = true;
       }
   },


   showMyDb: function () {
       if (personalMovieDb.private){
            console.log(personalMovieDb);
       }
    },

    writeYourGenres: function () {
       for (let i = 1; i <=2; i++) {
          //  const genre = prompt(`Ваш любимый жанр под номером ${i}`);
          //  personalMovieDb.genres[i - 1] = genre;
          // аналог записи двух строк выше
          personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
           for (let key in personalMovieDb.genres){
              if(personalMovieDb.genres[key] == '' || personalMovieDb.genres[key] == false ) {
               personalMovieDb.genres[i--]; // нужно сделать пункт 3 из урока 24
              }
           }
           // console.log(personalMovieDb.genres);
       
       }
   }
 
};



   // personalMovieDb.start();

   personalMovieDb.toggleVisibleMyDB();
   personalMovieDb.showMyDb();


   personalMovieDb.writeYourGenres();

   //
















































// const options = {
//     name: 'test',
//     width: 1024,
//     height: 104,
//     colors: {
//         border: 'black',
//         bg: 'red',
//     },
//     makeTest: function() { // метод который будет выполнятся внутри options
//         console.log("test") 
//     }
// }

// options.makeTest();

// // деструктуризация - деление объекта на более мелкие, удобные кусочки

// const {border, bg} = options.colors;

// console.log(border);


// console.log(Object.keys(options).length); // выводит количество элементов в объекте

// console.log(options["colors"]["border"]);

// delete options.name;  команда delete удаляет свойство (ключ + значение) из объекта

// перебор всех значений объекта
// for (let key in options) {

//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Новое свойство ${i} имеет значение ${options[key][i]}`)
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }

   
// }


// создаем счетчик свойст объекта


// let number = 0;

// for (let j in options) {
//     if (typeof(options[j]) === "object"){
//         for (let o in options[j]) {
//             console.log(o + ' ' + options[j][o]);
//             number++;
           
//         }
//     } else {
//         console.log(j + " " + options[j])
//         number++;
//     }
//     // console.log(j + ' ' + options[j]);
   
   
// }
// console.log(number);


// const arr = [1, 2, 3, 6, 8];

// // arr.pop(); // удаляет последний элемент массива
// arr.push(10); // добавляет в конец массива элемент 




// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }