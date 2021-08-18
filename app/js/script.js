const btnHamburger = document.querySelector('#btnHamburger');
const hamburger = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');

    if(hamburger.classList.contains('open')){ // Close Hamburger Menu
        hamburger.classList.remove('open');
        overlay.classList.remove('fade-in');
        overlay.classList.add('fade-out');
    }
    else { // Open Hamburger Menu
        hamburger.classList.add('open');
        overlay.classList.remove('fade-out');
        overlay.classList.add('fade-in');
    }
})