
const eventDate = new Date(2022, 0, 25, 14, 0, 0, 0);
                        //      jan    2 pm
const now = new Date();

let diffDates = eventDate - now;
console.log((eventDate - now) / 86400000);


let secondsInDay = 86400;
let secondsInHour = 3600;
let secondsInMinute = 60;
let secondsInSecond = 1;

//let totalSeconds = Date.



let n = Math.trunc(5.2)
console.log(n)
let day = document.querySelector('#day .value');
let diffDay = Math.trunc(diffDates / 86400000);
            // milisegundos num dia
diffDates = diffDay % (diffDates / 86400000);
console.log(diffDates)
day.innerHTML = diffDay

let hour = document.querySelector('#hour .value');
hour.innerHTML = eventDate.getHours() - now.getHours();

let minute = document.querySelector('#minute .value');
minute.innerHTML = eventDate.getMinutes() - now.getMinutes();

let second = document.querySelector('#second .value');
second.innerHTML = eventDate.getSeconds() - now.getSeconds();

console.log(now.getFullYear())
