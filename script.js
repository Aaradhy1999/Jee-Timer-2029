const monthsContainer = document.getElementById('months');
const daysContainer = document.getElementById('days');
const hoursContainer = document.getElementById('hours');
const minutesContainer = document.getElementById('minutes');
const secondsContainer = document.getElementById('seconds');

const targetDate = new Date('January 1, 2029 00:00:00').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;  /*getTime() give result in millisecond here we have to convert it in second
                                            hence these convertion constants are used*/
    const second = 1000;                     
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30.436875;

    const calculatedMonths = Math.floor(difference / month);
    const calculatedDays = Math.floor((difference % month) / day);
    const calculatedHours = Math.floor((difference % day) / hour);
    const calculatedMinutes = Math.floor((difference % hour) / minute);
    const calculatedSeconds = Math.floor((difference % minute) / second);
}