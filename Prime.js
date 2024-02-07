
let slideIndex = 1;
showSlides(slideIndex);
/*  Here 'n, is number of slides insted of n we use any name */
/* It increments or decrements the slideIndex by n  
which is either -1 for the previous slide or 1 for the next slide) */
function plusSlides(n) {
    showSlides(slideIndex += n); 
}
function showSlides(n) {
    
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
    // .style: The style property allows you to access the inline styles of an HTML element.
    // "block" is used to make the element a block-level element,
    //  which means it will start on a new line and take up the full width available.
}
// "DOMContentLoaded" is the event type.
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed 
//(without waiting for images, and iframes to finish loading).

document.addEventListener("DOMContentLoaded", function () {
    configureTrendingScroll('.trending');
    configureTrendingScroll('.trending1');
    configureTrendingScroll('.trending2');
    configureTrendingScroll('.trending3');
    configureTrendingScroll('.trending4');
    configureTrendingScroll('.trending5');
    configureTrendingScroll('.trending6');
});
// configureTrendingScroll is a higher order sunction
function configureTrendingScroll(selector) {
    const trending = document.querySelector(selector);
    const firstImage = trending.querySelector('img');
    
    let scrollingLeft = true;
    let isScrolling = false;
    let scrollTimeout;

    // Function to scroll images horizontally continuously
    function scrollImages() {

        if (scrollingLeft) {
            trending.scrollLeft += firstImage.width;
        } else {
            trending.scrollLeft -= firstImage.width;
        }

        // timeout for for moving images 
        scrollTimeout = setTimeout(scrollImages, 1000);
    }

    // Delay scrolling by 1.5 seconds on mouseover
    trending.addEventListener('mouseover', function (event) {
        // clientX is a standard property name for the horizontal coordinate of the mouse pointer in relation to the viewport.
        scrollingLeft = event.clientX < window.innerWidth / 2;
        isScrolling = true;

        // Start scrolling after a 1.5seconds delay
        scrollTimeout = setTimeout(scrollImages, 1000);
    });

    // Stop scrolling on mouseout
    trending.addEventListener('mouseout', function () {
        isScrolling = false;
        clearTimeout(scrollTimeout); // Clear any existing timeouts
    });
}

