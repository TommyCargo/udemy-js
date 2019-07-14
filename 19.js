let box = document.getElementById('box');
let btn = document.getElementsByTagName('button');
let circle = document.getElementsByClassName('circle');
let heart = document.querySelectorAll('.heart');
let oneHeart = document.querySelector('.heart');
let wrapper = document.querySelector('.wrapper');
// в отличии от ALL вернет первый элемент

//console.log(box);
console.log("getElementsByTagName('button'); ", btn);
console.log("getElementsByTagName('button')[0]; ", btn[0]);
//console.log(typeof(btn));
//console.log(circle[2]);
console.log("querySelectorAll('.heart'); ", heart);
console.log("querySelector('.heart'); one heart: ", oneHeart);

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';
/*
for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}

heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = 'blue';
});
*/

let div = document.createElement('div');
let text = document.createTextNode('Тут был я');
div.classList.add('black');
// добавляет класс .black

//document.body.appendChild(div);
// вставляет div в конец body
//wrapper.appendChild(div);
// вставляет div в конец wrapper

//div.innerHTML = '<h1>Hello World!</h1>';
div.textContent = 'Hello World!';
div.style.fontSize = 'small';

document.body.insertBefore(div, circle[0]);
// что вставить и перед чем

document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);

/*

.setAttribute('class', 'vydelit');
.removeAttribute('class');

*/
// https://habr.com/ru/post/459166/ 
// пример на замыкания
debugger;
function main() {
    var a = 100;

    function foo() {
        var b = a + 50;

        return b;
    }

    function bar() {
        var a = 40;

        return foo();
    }

    function baz() {
        return foo() + bar();
    }

    return baz();
}
main();

// https://habr.com/ru/post/459166/ 
// пример на мутацию
debugger;
function createFuncs() {
    var a = 5;

    function first() {
        console.log(`first.before-update: ${a}`);
        a += 1;
        console.log(`first.after-update: ${a}`);
    }
    function second() {
        console.log(`second.before-update: ${a}`);
        a += 1;
        console.log(`second.after-update: ${a}`);
    }

    return { first, second };
}

const funcs = createFuncs();
funcs.first();
funcs.second();
funcs.first();