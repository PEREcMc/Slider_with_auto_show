const btnPrev = document.getElementById('btn-prev')
const btnNext = document.getElementById('btn-next')
const slides = document.querySelectorAll('.slide')
const dots = document.querySelectorAll('.dot')

let index = 0;

const activeSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const activeDot = n => {
    for(dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const prepareCurrentSlide = index => {
    activeSlide(index)
    activeDot(index) 
}

const nextSlide = () => {
    if(index === slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index)
    } else {
        index++;
        prepareCurrentSlide(index)
    }
}
const prevSlide = () => {
    if(index === 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index)
    } else {
        index--;
        prepareCurrentSlide(index)
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index)
    })
})

btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

const autoChangeSlides = window.setInterval(nextSlide, 2500)
