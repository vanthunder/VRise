var scroll = window.requestAnimationFrame;

var elementsToShow = document.querySelectorAll(".showOnScroll");

function loop() {
    elementsToShow.forEach(function (element) {
        if (isElementInViewport(element)) {
            element.classList.add("isVisible");
        }
        else {
            element.classList.remove("isVisible");
        }
    });
    scroll(loop);
}

loop();

