AOS.init(); // AOS Initialization
let mixer = mixitup('.portfolio-list'); // mixitup 


// Runs the hamburger animation
let wrapperMenu = document.querySelector('.nav-burger');

wrapperMenu.addEventListener('click', function () {
    wrapperMenu.classList.toggle('nav-burger_open');
});

// Closes and opens the navbar menu
document.getElementById('nav-burger').onclick = function () {
    document.getElementById('nav-menu').classList.toggle('nav-menu_displayed');
};

