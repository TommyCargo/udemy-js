function learnJS(lang, callback) {
    console.log("Я учу: " + lang);
    callback();
}
/*
вместо 
learnJS();
callback();
что бы быть уверенным в порядке выполнения
*/
//определяем функцию
function done() {
    console.log("Я прошел 3ий урок!");
}
// делаем callback этой функции
learnJS("JavaScript", done);
/*
или
learnJS("JavaScript", function() {
    console.log("Я прошел 3ий урок!");
}
*/

// создаем объект
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};
console.log(options.name);
// добавляем свойства к объекту
options.bool = false;
// свойство объекта 0 объект
options.colors = {
    border: "black",
    bg: "red"
};
// удаляем свойство bool
delete options.bool;
console.log(options);

for (let key in options) {
    console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length);

// создаем массив
let arr = [1, 2, 3, 4, 5];
// удаляем последний элемент
arr.pop();
// добавляем элемент в конец
arr.push("5");
// удаляем первый элемент
arr.shift();
// добавляем элемент в начало
arr.unshift("1");

/*
arr[99] = 99;
// создаст <94 empty items>
console.log(arr.lenght);
// будет lenght = 100
console.log(arr);
*/

// выводим каждый элемент массива
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr = ["first", 2, 3, "four", 5];

arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (массив: " + mass + ')');
})

console.log(arr);

let mass = [1, 3, 4, 6, 7];

// for of - выдаст значения (1, 3, 4 ..), а for in выдаст ключи (0, 1 , 2 ..)
for (let key of mass) {
    console.log(key);
}

let ans = prompt("", "");
arr = [];
// в split передается разделитель, в данном случае запятая
// элементы принятый prompt будут записаны в массив 
arr = ans.split(',');
console.log(arr);

arr = ["aaww", 1, 15, 'something', 4];
// объеденим элементы массива в строку join'ом в качестве парамаетра разделитель
let i = arr.join(', ');
console.log(i);

// отсортируем массив (по алфавиту как строки)
i = arr.sort();
console.log(i);

function compareNum(a, b) {
    return a-b;
}

i = arr.sort(compareNum);
console.log(i);