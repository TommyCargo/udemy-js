tabs('.info-header-tab', '.info-header', '.info-tabcontent');

// Timer 

let deadLine = '2019-08-01';

function getRemainingTime(endTime) {
    let t = (Date.parse(endTime) - Date.parse(new Date())),
        scnds = Math.floor((t / 1000) % 60),
        mnts = Math.floor((t / 1000 / 60) % 60),
        hrs = Math.floor((t / (1000 * 60 * 60) % 24)),
        days = Math.floor((t / (1000 * 60 * 60 * 24)));

    return {
        'total': t,
        'hours': hrs,
        'minutes': mnts,
        'seconds': scnds,
        'days': days
    };
}

function setClock(id, endTime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getRemainingTime(endTime),
            d = 0;
        d = t.days >= 1 ? t.days : '';
        hours.textContent = t.hours < 10 ? (d + 'д. 0' + t.hours + 'ч. ') : (d + 'д. ' + t.hours + 'ч. ');
        minutes.textContent = t.minutes < 10 ? ('0' + t.minutes + 'м. ') : (t.minutes + 'м. ');
        seconds.textContent = t.seconds < 10 ? ('0' + t.seconds + 'с.') : (t.seconds + 'с.');




        if (t.total <= 0) {
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
            clearInterval(timeInterval);
        }

    }
}

setClock('timer', deadLine);


// Modal

let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

more.addEventListener('click', showModal);

close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

function showModal() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
}

let showMore = document.querySelectorAll('.description-btn'),
    index, button;

for (index = 0; index < showMore.length; index++) {
    button = showMore[index];
    button.addEventListener('click', showModal);
}

// Form

let message = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжемся!',
    failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    formDown = document.querySelector('#form');

statusMessage.classList.add('status');

form.addEventListener('submit', function (e) {
    event.preventDefault();
    form.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open('POST', 'server.php');
    //request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

    let formData = new FormData(form);

    let obj = {};
    formData.forEach(function(value, key) {
        obj[key] = value;
    });
    let json = JSON.stringify(obj);
    //request.send(formData);
    request.send(json);

    request.addEventListener('readystatechange', function() {
        if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
        } else if (request.readyState === 4 && request.status == 200) {
            statusMessage.innerHTML = message.success;
        } else {
            statusMessage.innerHTML = message.failure;
        }
    });

    for (let i = 0; i < input.length; i++) {
        input[i].value = '';
    }

});