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