export const carouselBig = function () {

    const allImgs = document.querySelectorAll(".carousel-big__img");
    const allBtns = document.querySelectorAll(".carousel-big__btn");
    const whichImg = document.querySelector(".carousel-big__text--bold");
    let i = 0;
    let counter = 0;
    let selectedId;

    function nextImg() {
        allImgs[i].classList.remove("carousel-big__img--visible");
        allBtns[i].classList.remove("carousel-big__btn--visible");
        i == allImgs.length - 1 ? (i = 0) : i++;
        allImgs[i].classList.add("carousel-big__img--visible");
        allBtns[i].classList.add("carousel-big__btn--visible");
        whichImg.textContent = `0${i + 1}`;
        counter = 0;
        changeImg();
    }

    function changeImg() {
        if (counter === 4) {
            return nextImg();
        }
        counter++;
        setTimeout(changeImg, 1000);
    }

    changeImg();

    function getId(evt) {
        evt.preventDefault();
        selectedId = this.id;
        return selectedId;
    }

    function getLastChar() {
        const lastChar = selectedId.slice(-1);
        return lastChar;
    }

    function parseToNumber() {
        const parsed = Number.parseInt(getLastChar(), 10);
        return parsed;
    }


    function changeSelected() {
        allImgs[i].classList.remove("carousel-big__img--visible");
        allBtns[i].classList.remove("carousel-big__btn--visible");
        i = parseToNumber();
        allImgs[i].classList.add("carousel-big__img--visible");
        allBtns[i].classList.add("carousel-big__btn--visible");
        whichImg.textContent = `0${i + 1}`;
        counter = 0;
    }

    for (let j = 0; j <= allBtns.length; j++) {
        allBtns[j].addEventListener("click", getId);
        allBtns[j].addEventListener("click", changeSelected);
    }
};