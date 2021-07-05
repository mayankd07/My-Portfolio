$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots: true,
    appendDots:'.slider-dots',
    dotsClass:'dots', 
    autoplay:true,
    autoplaySpeed: 3000,
    
});

$('#link1').click(function(){
    mobileNav.classList.remove('open');
});
$('#link2').click(function(){
    mobileNav.classList.remove('open');
});
$('#link3').click(function(){
    mobileNav.classList.remove('open');
});
$('#link4').click(function(){
    mobileNav.classList.remove('open');
});
$('#link5').click(function(){
    mobileNav.classList.remove('open');
});
$('#link6').click(function(){
    mobileNav.classList.remove('open');
});
$('#link7').click(function(){
    mobileNav.classList.remove('open');
});


let hamburger = document.querySelector('.hamburger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function(){
    mobileNav.classList.add('open');
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');
});


});