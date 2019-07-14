//'use strict';

let startBtn = document.getElementById("start");
// getElementsByClassName 
/*
let startBtn = document.getElementById("start"),
	budgetValue = document.getElementsByClassName('budget-value')[0],
	dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
	levelValue = document.getElementsByClassName('level-value')[0],
	expensesValue = document.getElementsByClassName('expenses-value')[0],
	optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
	incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
*/
let budgetValue = document.querySelector(".budget-value");
let dayBudgetValue = document.querySelector(".daybudget-value");
let levelValue = document.querySelector(".level-value");
let expensesValue = document.querySelector(".expenses-value");
let optionalExpensesValue = document.querySelector(".optionalexpenses-value");
let incomeValue = document.querySelector(".budget-value");
let monthSavingsValue = document.querySelector(".monthsavings-value");
let yearSavingsValue = document.querySelector(".yearsavings-value");

let expensesItems = document.querySelectorAll(".expenses-item");

//let acceptBtn = 
let expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2];

let optionalExpensesItems = document.querySelectorAll(".optionalexpenses-item");

let chooseIncome = document.querySelector(".choose-income");
let checkSavings = document.querySelector("#savings");
//let sum = document.querySelector('label[for="sum"]');
//let percent = document.querySelector('label[for="percent"]');
let sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector(".year-value");
let monthValue = document.querySelector(".month-value");
let dayValue = document.querySelector(".day-value");



let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", "");
            let b = +prompt("Во сколько обойдется?", "");
            if ((typeof(a)) === 'string' && (typeof(a)) != null && 
            (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
                console.log("Done!");
                appData.expenses[a] = b;
            } else {
                console.log("Skip!");
                continue;
            }
            
        }
    },
    determineDayBudget: function() {
        appData.moneyPerDay = (appData.budget/30).toFixed();

        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    determineLevel: function() {
        if (appData.moneyPerDay < 100){
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000){
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) { 
            // ?? if (appData.savings) {
            let save = +prompt("Какова сумма накоплений?", "");
            let percent = +prompt("Под какой процент?", "");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        // Функция для определения необязательных расходов
        for (let i = 1; i <= 3; i++) {
            let questionOptExpenses = prompt("Статья необязательных расходов?");
            appData.optionalExpenses[i] = questionOptExpenses;
            console.log(appData.optionalExpenses);
        }
    },
    chooseIncome: function() {
        let items = prompt('Что принесет дополнительный доход? (Перечислите через запятую).','');

        while ( (items == null) || (items == "") || !(typeof(items) === "string")) {
            console.log(!(typeof(items) === "string") || items == null || items == "" || !(items instanceof String));
            console.log(items);
            items = prompt('Что принесет дополнительный доход? (Перечислите через запятую).','');
        }

        appData.income = items.split(', ');
        //appData.income.push(prompt('Может то-то еще?', ''));
        appData.income.sort();
        
        console.log("Способы доп. заработка: ");
        appData.income.forEach(function(item, i) {
            console.log((i+1) + ': ' + item);
        });
    }
};
appData.chooseIncome();

console.log("Наша программа включает в себя данные: ");
for (let key in appData) {
    console.log(appData.key);
}