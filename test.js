/*if (2*4 == 8) {
    console.log("True!");
}

if ( false ) {
    console.log("True!");
} else {
    console.log("False!");
}

let num = 50;
if (num > 40) {
    console.log("True!");
} else {
    console.log("False!");
}
(num > 40) ? (console.log("TrueT!")) : (console.log("False!"));
// ^ тернарный оператор

switch (num) {
    case 49:
        console.log("49");
        break;
    case 50:
        console.log("50");
        break;
    default:
        console.log("Default");
}

while (false) {
    console.log("never");
}
do {
    console.log("only once");
} while (false);

for (let i = 1; i < 4; i++){
    console.log(i);
}
for (let i = 1; i < 10; i++){
    if ((i % 2) == 0){
        continue;
    }
    if (i == 6){
        break;
    }
    console.log(i);
}
let fNum = 20;
function showMessage(text) {
    console.log(text);
    console.log(fNum);   
}

showMessage("Hello World!");
console.log(fNum);
*/
if ({} == []) {
     console.log("YES");
    } else {
         console.log("NO");
}

var obj =  {}, arr = [];
obj == 0;
arr == 0;
if (obj == arr) {
    console.log("0 YES");
   } else {
        console.log("0 NO");
}
console.log([] == {});
/*
let calc = function(a, b) {
    return (a + b);
}
*/
let calc = (a, b) => { a+b; };

