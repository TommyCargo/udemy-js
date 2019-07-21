// let var const 
// hoisting
// var всплывает (hoist) и будет undefined до объявления ограничено функциями
// let видна только в scope ограниченном {} объявится только в момент определения, но не до

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health: 100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);



function hello() {
    console.log("Hello world!");
}
hello();

function hi() {
    console.log("Hello world!");
}
hi();

function compareNum(a, b) {
    return a-b;
}
let arr = ["aaww", 1, 15, 'something', 4];
let i = arr.sort(compareNum);
console.log(i);