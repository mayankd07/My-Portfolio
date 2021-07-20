$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots: true,
    appendDots:'.slider-dots',
    dotsClass:'dots', 
    autoplay:true,
    autoplaySpeed: 3000,
    
});

$('.mob-link').click(function(){
    mobileNav.classList.remove('open');
});



let hamburger = document.querySelector('.hamburger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});
$('.mayank, .about, .education').click(function(){
    mobileNav.classList.remove('open');

})

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});

});