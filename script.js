const eventYear = 2022;
const eventMonth = 05;
const eventDay = 22;
const eventHour = 10;
const eventMinute = 28;

const eventDate = new Date(eventYear, 
    eventMonth - 1,
    eventDay, 
    eventHour, 
    eventMinute, 
    20, 0
); 


document.querySelector('#date').innerHTML = `${eventDate.getDate()} / ${eventDate.getMonth() + 1} / ${eventDate.getFullYear()} - ${eventDate.getHours()}:${eventDate.getMinutes()}`

const getTimeUntilEvent = () => {
    const now = new Date();

    let gap = eventDate - now;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let textDay = Math.floor(gap / day);
    let textHour = Math.floor((gap % day) / hour);
    let textMinute = Math.floor((gap % hour) / minute);
    let textSecond = Math.floor((gap % minute) / second);
    return {
        'day': textDay,
        'hour': textHour,
        'minute': textMinute,
        'second': textSecond
    };
}

function updateCountDownTime () {

    const time = getTimeUntilEvent()

    document.querySelector('#day .value').innerHTML = time.day;
    document.querySelector('#hour .value').innerHTML = time.hour;
    document.querySelector('#minute .value').innerHTML = time.minute;
    document.querySelector('#second .value').innerHTML = time.second;
}

const isCountDownFinished = () => {
    return new Promise((resolve, reject) => {
        const timeUntilEvent = getTimeUntilEvent();
        if(timeUntilEvent.day <= 0 && timeUntilEvent.hour <= 0 && timeUntilEvent.minute <= 0 && timeUntilEvent.second <= 0) {
            resolve();
        } else {
            reject();
        }
    }) 
}

setInterval(() => {
    isCountDownFinished().then(() => {
        document.querySelector('.eventAnnouncement').innerHTML = 'Seu evento já começou!'
        document.querySelector('.time').style.display = 'none';
    }).catch(() => {
        updateCountDownTime()
    })
}, 1000)




