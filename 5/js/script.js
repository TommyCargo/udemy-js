let mainMenu = document.querySelector(".menu");
let menuItems = document.querySelectorAll('.menu-item');
let commercial = document.querySelector(".adv");
let title = document.getElementById("title");
let prom = document.getElementById("prompt");



document.body.style.backgroundImage = "url(img/apple_true.jpg)";
// меняем фоновое изображение
/*
menuItems[1].textContent = 'Второй пункт';
menuItems[2].textContent = 'Третий пункт';
*/
mainMenu.insertBefore(menuItems[2], menuItems[1]); 
//меняем местами второй и третий элемент

//добавляем пятый элемент меню
let li = document.createElement('li');
li.textContent = 'Пятый пункт';
li.classList.add('menu-item');
mainMenu.appendChild(li);
//document.body.insertBefore(div, circle[0]);

//заменяем текст
title.textContent = 'Мы продаем только подлинную технику Apple';


//убираем рекламу
commercial.parentNode.removeChild(commercial);

// выводим сообщение пользователя в div с id #prompt
let opinion = prompt("Как Вы относитесь к технике Apple?", "");

prom.textContent = opinion;