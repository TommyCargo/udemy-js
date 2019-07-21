/*
localStorage.setItem("number", 1);

console.log(localStorage.getItem("number"));

localStorage.removeItem("number");

localStorage.clear();
*/
window.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.getElementById('rememberMe'),
        change = document.getElementById('change'),
        form = document.getElementsByTagName('form')[0];

    if (localStorage.getItem("isChecked") === "true") {
        checkbox.checked = true;
    }

    if (localStorage.getItem("bg") === "changed") {
        form.style.backgroundColor = "#FF4766";
    }

    checkbox.addEventListener('click', function() {
        localStorage.setItem("isChecked", true);
        form.style.backgroundColor = "#FF4766";
    })

    change.addEventListener('click', function() {
        localStorage.setItem('bg', 'changed');
    });

    let persone = {
        name: "Alex",
        age: 25,
        tech: ["mobile", 'notebook']
    }

    let serializedPerson = JSON.stringify(persone);
    console.log(serializedPerson);
    localStorage.setItem("Alex", serializedPerson);
    console.log(JSON.parse(localStorage.getItem("Alex")));
});