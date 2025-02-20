let canvasWidth = document.documentElement.clientWidth - 10;
let canvasHeight = document.documentElement.clientHeight - 10;

// in p5.js, the function runs on page load:
function setup() {
    rectMode(CENTER);
    createCanvas(canvasWidth, canvasHeight);
}

function getColor(){
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    return[r, g, b];
}

function getColorByMouse(){
    let r = mouseX % 255;
    let g = mouseY % 255;
    let b = (mouseX * mouseY) % 255;
    return[r, g, b];
}

function shapeDrawer(){
    let squareChance = Math.random()*10;
    fill(getColorByMouse());
    if (squareChance < 5){
        circle(mouseX, mouseY, Math.random()*100);
    }else{
        square(mouseX, mouseY, Math.random()*100);
    }
}

function drawBullseye(){
    let width = 300;
    while(width > 0){
        fill(getColorByMouse());
        circle(mouseX, mouseY, width);
        width -= 50;
    }
}

// in p5.js, special event handler that listens for click events:
function mouseClicked() {
    //shapeDrawer();
    drawBullseye();
}

// in p5.js, special event handler that listens for drag events:
function mouseDragged() {
    //shapeDrawer();
    drawBullseye();
}

/**
 * Challenges:
 * 1. As you click / drag, can the circles have different colors and sizes?
 *      * Try using the Math.random() function
 * 2. Can you make the click / drag sometimes make circles and sometimes make rectangles
 *      * Sample rectangle function invocation: rect(mouseX, mouseY, 100, 100);
 * 3. Can you make each click create a bulleye of different colors?
 *      * Hint: make sure you draw the bigger circles before you draw the smaller circles.
 */
