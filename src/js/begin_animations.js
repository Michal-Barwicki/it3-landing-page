export const beginAnimation = (function () {
    'use strict';

    const aboutColumns = document.querySelectorAll(".section-about .col-1-of-2");
    const galleryPhoto1 = document.querySelector(".gallery__img--1");
    const galleryPhoto2 = document.querySelector(".gallery__img--2");
    const galleryPhoto3 = document.querySelector(".gallery__img--3");
    const galleryPhoto4 = document.querySelector(".gallery__img--4");
    const offerColumns = document.querySelectorAll(".section-offer .col-1-of-2");
    const storyHeading = document.querySelector(".section-story .heading-secondary");
    const storyStories = document.querySelectorAll(".section-story .col-1-of-3");

    let scrollValue;

    const animationName = ["fromLeft", "fromRight", "fromTop"];

    function addAnimation(element, index) {
        if (scrollValue >= (element.offsetTop - window.innerHeight)) {
            element.style.animation = `${animationName[index]} .8s ease-out 1`
        }
    }

    window.addEventListener("scroll", function () {
        scrollValue = this.scrollY; {
            addAnimation(aboutColumns[0], 0);
            addAnimation(aboutColumns[1], 1);

            addAnimation(galleryPhoto1, 0);
            addAnimation(galleryPhoto3, 0);
            addAnimation(galleryPhoto2, 1);
            addAnimation(galleryPhoto4, 1);

            addAnimation(offerColumns[0], 0);
            addAnimation(offerColumns[1], 1);

            addAnimation(storyHeading, 0);

            addAnimation(storyStories[0], 0);
            addAnimation(storyStories[1], 2);
            addAnimation(storyStories[2], 1);

        }
    })
})();