//'use strict';

let startBtn = document.getElementById("start");
let budgetValue = document.querySelector(".budget-value");
let dayBudgetValue = document.querySelector(".daybudget-value");
let levelValue = document.querySelector(".level-value");
let expensesValue = document.querySelector(".expenses-value");
let optionalExpensesValue = document.querySelector(".optionalexpenses-value");
let incomeValue = document.querySelector(".income-value");
let monthSavingsValue = document.querySelector(".monthsavings-value");
let yearSavingsValue = document.querySelector(".yearsavings-value");

let expensesItems = document.querySelectorAll(".expenses-item");
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

startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");
    
    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    appData.started = true;
    setBtnDisabled();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;
    for (let i = 0; i < expensesItems.length; i++){
        let a = expensesItems[i].value;
        let b = expensesItems[++i].value;
        if ((typeof(a)) === 'string' && (typeof(a)) != null && 
        (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("Done!");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log("Skip!");
            continue;
        }
        
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    // Функция для определения необязательных расходов
    for (let i = 0; i < optionalExpensesItems.length; i++) {
        let opt = optionalExpensesItems[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {

    if (appData.budget != undefined) {
        let sum = 0;
        if (expensesValue.textContent != null) {
            sum = +expensesValue.textContent;
        }
        appData.moneyPerDay = ((appData.budget-sum)/30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
        
        if (appData.moneyPerDay < 100){
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000){
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }
});

chooseIncome.addEventListener('input', function() {
    let items = chooseIncome.value;
    if (isNaN(items) || items != '') {
        appData.income = items.split(', ');
        incomeValue.textContent = appData.income;
    }
});

checkSavings.addEventListener('click', function() {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});



let appData = {
    started: false,
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses:{},
    income: [],
    savings: false,
    
};

function setBtnDisabled() {
    let btns = document.getElementsByTagName('button');
    for (let i = 0; i < btns.length - 1; i++) {
            btns[i].disabled = !appData.started;
    }
}
setBtnDisabled();