function User(name, age) {
    this.name = name;
    let userAge = age;
    //this.age = age;

    this.say = function() {
        console.log(`Имя пользователя ${this.name}, возраст ${userAge}.`);
    }

    this.getAge = function() {
        return userAge;
    }

    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 200) {
            userAge = age;
        } else {
            console.log('Недопустимое значение age');
        }
    }

}

let ivan = new User('Ivan', 25);

console.log(ivan.name);
console.log(ivan.userAge);
console.log(ivan.getAge());


ivan.setAge(30);
console.log(ivan.getAge());

ivan.say();
