const images = document.querySelectorAll('.slider-img');
const texts = document.querySelectorAll('.slider-text');
const controlls = document.querySelectorAll('.controlls');
const slid = document.getElementsByClassName('slider');
let imageIndex = 0;

function firstshow() {
    images[imageIndex].classList.add('active');
    texts[imageIndex].classList.add('active');
    slid[0].classList.add('active');
}
function maxshow() {
    images[imageIndex].classList.add('active_2');
    texts[imageIndex].classList.add('active_2');
}
function delmaxshow() {
    images[imageIndex].classList.remove('active_2');
    texts[imageIndex].classList.remove('active_2');
}
function show(index) {
    texts[imageIndex].classList.remove('active');
    images[imageIndex].classList.remove('active');
    texts[index].classList.add('active');
    images[index].classList.add('active');
    slid[0].classList.add('active');
    imageIndex = index;
}

function showNextSlide() {
    let index = imageIndex + 1;
    if (index >= images.length) {
        index = 0;
    }
    show(index);
}

function startAutoSlide() {
    setTimeout(firstshow, 4000); 
}

controlls.forEach((e) => {
    e.addEventListener('click', (event) => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;
            if (index < 0) {
                index = images.length - 1;
            }
            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    });
});
images.forEach(image => {
    image.addEventListener('click', (event) => {
        if (!event.target.classList.contains('active_2')){
            maxshow(imageIndex);
        }else{
             delmaxshow();
        }

    });
});
startAutoSlide()

