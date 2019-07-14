window.addEventListener('DOMContentLoaded', function() {
    let box = document.querySelector('#box');

    box.addEventListener('touchmove', function(e) {
        e.preventDefault();
        console.log("Red box: " + e.touches[0].pageX);
    });
});
/*
==== РЕГУЛЯРНЫЕ ВЫРАЖЕНИЯ == REGULAR EXPRESSIONS ====

new RegExp('pattern', 'flags');
/pattern/flags;

flags:

i - независимо от регистра
g - глобально, все совпадения
m - многострочность

\d - digits
\D - not a digit
\w - words
\W
\s - spaces
\S

*/
/*
let ans = prompt("Введите Ваше имя", "");

let reg = /n/gi;

//console.log(ans.search(reg));
console.log(ans.match(reg));
console.log(reg.test(ans));

let pass = prompt("ВВедите пароль", "");

console.log(pass.replace(/./gi, "*"));

alert('12-34-56'.replace(/-/g, ':'));
*/
/*
let ans = prompt("Введите число", "");

let reg = /\d/g;

console.log(ans.match(reg));
*/

let str = 'My name is/ R2D2';

console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\//i));