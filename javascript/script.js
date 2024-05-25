const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicators = document.querySelectorAll('.carousel-indicators button');
const mediaQuery = window.matchMedia('(max-width: 600px)');

let isSmallScreen = mediaQuery.matches;
let currentIndex = 0;

function updateCarousel() {
    if (!isSmallScreen) {
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

function showPrev() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselItems.length - 1;
    updateCarousel();
}

function showNext() {
    currentIndex = (currentIndex < carouselItems.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
}

function handleScreenResize(e) {
    isSmallScreen = e.matches;
    updateButtonActions();
}

function updateButtonActions() {
    if (isSmallScreen) {
        prevBtn.onclick = () => {
            carouselInner.scrollBy({ left: -carouselInner.clientWidth, behavior: 'smooth' });
        };
        nextBtn.onclick = () => {
            carouselInner.scrollBy({ left: carouselInner.clientWidth, behavior: 'smooth' });
        };
    } else {
        prevBtn.onclick = showPrev;
        nextBtn.onclick = showNext;
    }
}

function updateIndicatorOnScroll() {
    const scrollPosition = carouselInner.scrollLeft;
    const itemWidth = carouselInner.clientWidth;
    currentIndex = Math.round(scrollPosition / itemWidth);
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentIndex);
    });
}

carouselInner.addEventListener('scroll', updateIndicatorOnScroll);

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
        if (isSmallScreen) {
            carouselInner.scrollTo({ left: index * carouselInner.clientWidth, behavior: 'smooth' });
        }
    });
});

mediaQuery.addEventListener('change', handleScreenResize);

updateButtonActions();
updateCarousel();
