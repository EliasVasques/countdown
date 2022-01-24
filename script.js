function updateCountDown () {
    // 25 janeiro de 2022 as 14 horas
    const eventDate = new Date(2022, 0, 25, 14, 0, 0, 0); 
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

    document.querySelector('#day .value').innerHTML = textDay;
    document.querySelector('#hour .value').innerHTML = textHour;
    document.querySelector('#minute .value').innerHTML = textMinute;
    document.querySelector('#second .value').innerHTML = textSecond;
}
setInterval(updateCountDown, 1000);
