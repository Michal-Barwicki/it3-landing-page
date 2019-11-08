export const carouselSmall = function () {

    const allImgs = document.querySelectorAll(".carousel-small__img");
    const img = document.querySelector(".carousel-small__img");
    const carouselBox = document.querySelector(".carousel-small__box");
    let i = 0;
    let counter = 0;

    let imgWidth = img.getBoundingClientRect().width;

    function carouselSlide() {
        if (i < (allImgs.length - 3)) {
            carouselBox.style.transition = `transform .4s ease-in-out`;
            carouselBox.style.transform = `translateX(-${(imgWidth)*(i+1)}px)`;
            i++;
            changeImg();

        } else {
            carouselBox.style.transition = `none`;
            carouselBox.style.transform = `translateX(0px)`;
            i = 0;
            counter = 3;
            changeImg();
        }
    }

    function changeImg() {
        if (counter == 4) {
            counter = 0;
            return carouselSlide();
        }
        counter++;
        setTimeout(changeImg, 1000);
    }
    changeImg();
};