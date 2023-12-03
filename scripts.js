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
const form = document.querySelector('#form')


submit.addEventListener('click', submitClick);

function submitClick(event){
    form.innerHTML = '<h3 class="animate__animated animate__fadeInDown" style="text-align: center; background-color: #42792594; padding: 15px">Thank you for subscribing to us :)</h3>'
}

const quote = document.querySelector('.quotes');

const arrayQuote = ['<h3>I volunteer with Shenandoah Trails because restoration will help with land erosion, climate change, and promote balance with nature.</h3><p>-- J. Anderson</p>', '<h3></h3>', '<h3></h3>'];

const leftBtn = document.querySelector('#changeLeft')
const rightBtn = document.querySelector('#changeRight')

function leftClick(event){

}

leftBtn.addEventListener('click', () => {
    quote.innerHTML = arrayQuote[0];
})

function rightClick(event){
    quote
}