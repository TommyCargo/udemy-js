let box = document.getElementById('box');
let btn = document.getElementsByTagName('button');
let circle = document.getElementsByClassName('circle');
let heart = document.querySelectorAll('.heart');
let oneHeart = document.querySelector('.heart');
let wrapper = document.querySelector('.wrapper');
// в отличии от ALL вернет первый элемент
/*
console.log(box);
console.log(btn);
console.log(btn[0]);
console.log(typeof(btn));
console.log(circle[2]);
console.log(heart);
console.log(oneHeart);
*/
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