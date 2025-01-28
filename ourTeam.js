const slidesTeam = document.querySelectorAll('.team-slide');
const slider = document.querySelector('.team-slider');
const slideCount = slidesTeam.length;
const slideWidth = slidesTeam[0].clientWidth;
let currentSlideTeam = 0;
let isAnimating = false;

// Clone the first and last slidesTeam for seamless looping
const firstSlideClone = slidesTeam[0].cloneNode(true);
const lastSlideClone = slidesTeam[slideCount - 1].cloneNode(true);

slider.appendChild(firstSlideClone);
slider.insertBefore(lastSlideClone, slidesTeam[0]);

slider.style.transform = `translateX(-${slideWidth}px)`;
currentSlideTeam = 1;

function moveSlides(n) {
    if (isAnimating) return;
    isAnimating = true;

    currentSlideTeam += n;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${currentSlideTeam * slideWidth}px)`;

    if (currentSlideTeam === slideCount + 1) {
        setTimeout(() => {
            slider.style.transition = 'none';
            currentSlideTeam = 1;
            slider.style.transform = `translateX(-${slideWidth}px)`;
            isAnimating = false;
        }, 500);
    } else if (currentSlideTeam === 0) {
        setTimeout(() => {
            slider.style.transition = 'none';
            currentSlideTeam = slideCount;
            slider.style.transform = `translateX(-${currentSlideTeam * slideWidth}px)`;
            isAnimating = false;
        }, 500);
    } else {
        setTimeout(() => isAnimating = false, 500);
    }
}

setInterval(() => {
    if (!isAnimating) {
        moveSlides(1);
    }
}, 5000);

document.querySelector('.left-arrow').addEventListener('click', () => {
    moveSlides(-1);
});

document.querySelector('.right-arrow').addEventListener('click', () => {
    moveSlides(1);
});