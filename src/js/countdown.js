export const countdown = (function () {
    'use strict';

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const countDown = new Date('Dec 31, 2019 12:00:00').getTime();

    setInterval(function () {

        const now = new Date().getTime();
        const distance = countDown - now;

        document.querySelector(".clock__digits--days").textContent = ("0" + Math.floor(distance / day)).slice(-2);
        document.querySelector(".clock__digits--hours").textContent = ("0" + Math.floor((distance % day) / hour)).slice(-2);
        document.querySelector(".clock__digits--minutes").textContent = ("0" + Math.floor((distance % hour) / minute)).slice(-2);
        document.querySelector(".clock__digits--seconds").textContent = ("0" + Math.floor((distance % minute) / second)).slice(-2);

    }, second)

})();