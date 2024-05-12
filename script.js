function showContent(contentId) {
    var contents = document.querySelectorAll('.content div'); // Corrected selector
    for (var i = 0; i < contents.length; i++) {
        contents[i].classList.remove('active');
    }
    document.getElementById(contentId + 'Content').classList.add('active');
}


const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


let slideIndex = 0;
let timer; // Variable to store the timer for auto sliding

function showSlide(n) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot-slider');

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    // Set slideIndex within the valid range
    slideIndex = (n + slides.length) % slides.length;

    // Show the selected slide and mark its corresponding dot as active
    slides[slideIndex].style.display = 'flex';
    dots[slideIndex].classList.add('active');
}

// Show the first slide initially
showSlide(slideIndex);

// Function to show the next slide automatically
function showNextSlide() {
    // Change slide to the next one
    showSlide(slideIndex + 1);
}

// Start the timer for auto sliding
function startTimer() {
    timer = setInterval(showNextSlide, 5000); // Change slide every 5 seconds
}

// Stop the timer
function stopTimer() {
    clearInterval(timer); // Clear timer to stop auto sliding
}

// Manual navigation functions
function currentSlide(n) {
    stopTimer(); // Stop timer when manual navigation occurs
    showSlide(n);
    startTimer(); // Restart timer after manual navigation
}

// Start auto sliding
startTimer();


document.addEventListener("DOMContentLoaded", function() {
    var menuIcon = document.getElementById('menu-icon');
    var menuItems = document.getElementById('menu-items');

    menuIcon.addEventListener('click', function() {
        menuItems.classList.toggle('show-menu');
    });
});


