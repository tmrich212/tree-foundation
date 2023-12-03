var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel);

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const impactBox = document.querySelector('#stats-title');

btn1.addEventListener('click', function(){
    impactBox.innerHTML = '<h1 class="animate__animated animate__bounceInLeft">As of 2023, we have planted 200,000 trees!</h1>'
});

btn2.addEventListener('click', () => {
    impactBox.innerHTML = '<h1 class="animate__animated animate__bounceInUp">There have been a total of 1,200+ voluneteers in 2023!</h1>'
})

btn3.addEventListener('click', () => {
    impactBox.innerHTML = '<h1 class="animate__animated animate__bounceInRight">As of 2023, we have recieved $30,000 donations!</h1>'
})

const submit = document.querySelector('#submit');
const input = 

submit.addEventListener('click', submitClick, false);

function submitClick(event){
    submit.innerHTML = "Thank you for signing up :)"
    submit.style.backgroundColor = 'orange'
    event.preventDefault()
}