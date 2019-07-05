'use strict';
/*
a = 5;
console.log(a);
*/
let arr = ['plum.png', 'orange.png', 'apple.png'];

console.log(arr[0]);

//alert("Hello world!");
/*
let answer = confirm('Is that so?');

console.log(answer);
*/
//let answer = prompt("Есть ли Вам 18?", "Да");
let answer = +prompt("Есть ли Вам 18?", "Да");
// + перед prompt преобразует string в number
console.log(answer);
console.log(typeof(answer));
console.log(typeof(arr));

let incr = 10,
    decr = 10;

console.log(incr++);
console.log(decr--);
console.log(++incr);
console.log(--decr);


console.log(5%2);

console.log("2" == 2);
console.log("2" === 2);

let isTrue = true,
    isFalse = false;
console.log("isTrue && !isFalse");
console.log(isTrue && !isFalse);


let x = 10;
console.log("isTrue || ++x");
console.log(x);
console.log(isTrue || (++x));
console.log(x);

console.log("++x || isFalse");
console.log(x);
console.log((++x) || isFalse);
console.log(x);

console.log("ifFalse || x++");
console.log(x);
console.log(isFalse || (x++));
console.log(x);