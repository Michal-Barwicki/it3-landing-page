export const menu = (function () {
    'use strict';

    const menuBtn = document.querySelector(".aside__menu-btn");
    const menu = document.querySelector(".menu");
    const closeMenu = document.querySelector(".menu__close");
    const lineFirst = document.querySelector(".aside__menu-btn--line-1");
    const lineSecond = document.querySelector(".aside__menu-btn--line-2");

    const menuItems = document.querySelectorAll(".menu__item");

    const sectionAbout = document.querySelector(".section-about");
    const sectionGallery = document.querySelector(".section-gallery");
    const sectionStory = document.querySelector(".section-story");

    menuBtn.addEventListener("click", function () {
        menu.classList.add("menu--active");
    })
    closeMenu.addEventListener("click", function () {
        menu.classList.remove("menu--active");
    })
    menuBtn.addEventListener("mouseover", function () {
        lineFirst.style.animation = `reduceX .5s alternate infinite`
        lineSecond.style.animation = `stretchX .5s alternate infinite`
    })
    menuBtn.addEventListener("mouseout", function () {
        lineFirst.style.animation = `none`
        lineSecond.style.animation = `none`
    })

    menuItems[0].addEventListener("click", function () {
        animateScroll(sectionAbout);
    });
    menuItems[1].addEventListener("click", function () {
        animateScroll(sectionGallery);
    });
    menuItems[2].addEventListener("click", function () {
        animateScroll(sectionStory);
    });

    function animateScroll(element) {
        if (window.scrollY <= element.offsetTop) {
            window.scrollBy(0, 40);
            setTimeout(animateScroll, 10, element)
        }
        if (window.scrollY >= (element.offsetTop + 50)) {
            window.scrollBy(0, -40);
            setTimeout(animateScroll, 10, element)
        }
    }

})();