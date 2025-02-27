let currentPosition = 0;
let gap = 10;
const slideWidth = 400;

function moveCarousel(direction) {
    const items = document.querySelectorAll(".carousel-item");

    // if else statements determine the current position of the carousel
    if (direction == "forward") {
        // minus 2 b/c first 2 slides already showing
        if (currentPosition >= items.length - 2) {
            return false;
        }
        currentPosition++;
    } else {
        if (currentPosition == 0) {
            return false;
        }
        currentPosition--;
    }

    //tells how much to slide the carousel
    const offset = (slideWidth + gap) * currentPosition;

    //
    // for (const item of items) {
    //     item.style.transform = `translateX(-${offset}px)`;
    // }

    //selects the carousel-overflow-container id and translates it according the amount determined by the offset
    const container = document.querySelector("#carousel-overflow-container");

    container.style.transform = `translateX(-${offset}px)`;
}
