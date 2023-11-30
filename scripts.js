var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel);

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const impactBox = document.querySelector('#stats-title');

btn1.addEventListener('click', function(){
    impactBox.innerHTML = '<h1 class="animate__animated animate__bounceInLeft">20,000 Trees Planted!</h1>'
});

btn2.addEventListener('click', () => {
    impactBox.innerHTML = '<h1 class="animate__animated animate__bounceInUp">There have been a total of 1,200+ voluneteers in 2023</h1>'
})

btn3.addEventListener('click', () => {
    impactBox.innerHTML = '<h1 class="animate__animated animate__bounceInRight">As of 2023, we have recieved $30,000 donations!</h1>'
})