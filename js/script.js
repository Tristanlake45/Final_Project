/*hamburger menu rules*/
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

/*javascript demo page rules*/
const imageContainer = document.getElementById('image-container');

/* Add event listener for click event on the image container*/
imageContainer.addEventListener('click', function() {
    imageContainer.classList.toggle('flip');
});