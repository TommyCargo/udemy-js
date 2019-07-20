//debugger
'use strict'
let name = 'Ivan',
    age = 30,
    mail = 'example@mail.ru';

//document.write('Пользователю ' + name + ' ' + age + ' лет. Его почтовый адрес: ' + mail);
document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

function makeArray() {
    var items = [];
    //for (var i = 0; i < 10; i++) {
    for (let i = 0; i < 10; i++) {
        var item = function () {
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();

let fun = () => {
    console.log(this);
};
// у стрелочной фукнции тот же контекст, то и снаружи
fun();

let obj = {
    number: 5,
    sayNumber: function () {
        let say = () => {
            console.log(this);
        };
        say();
    }
};
obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let show = () => {
        console.log(this);
    };
    show();
});
//function calcOrDouble(number, basis) { //ES5
function calcOrDouble(number, basis = 2) { //ES6
    //basis = basis || 2;
    // ES5
    console.log(number * basis);
}
calcOrDouble(3, 5);
calcOrDouble(6);

class Rectangle {
    constructor(height, width = 20) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(10);

console.log(square.calcArea());

let video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(a + b + c);
}
let numbers = [2, 5, 7];

log(...numbers);


// Promise
/*
function shoot(arrow, headshot, fail) {
    console.log('Вы сделали выстрел...');

    setTimeout(function() {
        Math.random() > 0.5 ? headshot({}) : fail('Вы промахнулись');

    }, 3000);
};

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво!');
}

function giveMoney() {
    console.log('Вам заплатили!');
}

function loose() {
    console.log('Вы проиграли!');
}
let drink = 0;
shoot({}, 
        function(mark) {
            console.log('Вы попали в цель');
            win(mark, buyBeer, giveMoney);
        }, 
        function(miss) {
            console.error(miss);
            loose();
        }
    )
*/
function shoot(arrow) {
    console.log('Вы сделали выстрел...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function () {
            Math.random() > 0.5 ? resolve({}) : reject('Вы промахнулись');
    
        }, 3000);
    });
    return promise;
};

function win() {
    console.log('Вы победили!');
    (drink == 1) ? buyBeer(): giveMoney();
}

function buyBeer() {
    console.log('Вам купили пиво!');
}

function giveMoney() {
    console.log('Вам заплатили!');
}

function loose() {
    console.log('Вы проиграли!');
}
let drink = 0;

shoot({})
        .then(mark => console.log('Вы попали в цель'))
        .then(win)
        .catch(loose)