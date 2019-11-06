export const counterFromZero = (function () {
    'use strict';

    const counters = document.querySelectorAll(".numbers__digits")
    const countersBox = document.querySelector(".numbers");
    let scrollValue;
    let values = [];
    let firsTime = true;


    function countersValue() {
        for (let i = 0; i < counters.length; i++) {
            values.push(parseInt((counters[i].textContent), 10));
        }
    }
    countersValue();



    function elementFromTop() {
        return countersBox.offsetTop;

    }

    // function elementHeight() {
    //     return countersBox.offsetHeight;
    // }


    function startCounter() {
        if (scrollValue > (elementFromTop() - window.innerHeight) && firsTime) {
            animateCounter(0, 5, 0);
            animateCounter(1, 1, 0);
            animateCounter(2, 2, 0);
            animateCounter(3, 2, 0);
            firsTime = false;
        }
    }

    window.addEventListener("scroll", function () {
        scrollValue = this.scrollY; {
            return startCounter();
        }
    })

    function animateCounter(index, skip, digits) {
        if (digits <= values[index]) {
            counters[index].textContent = digits;
            digits += skip;
        }


        setTimeout(animateCounter, 40, index, skip, digits);
    }
})();