if (2*4 == 8) {
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
(num > 40) ? console.log("TrueT!") : console.log("False!");
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