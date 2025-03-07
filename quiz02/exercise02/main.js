const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    rectMode(CENTER);
    
    drawMonster(100, 100, 150, '#0bc9cd', false);
    drawMonster(300, 200, 75, '#8093f1', true);
    drawMonster(100, 325, 100, '#8093f1', false);
    drawMonster(250, 375, 125, '#7fb285', true);
    drawMonster(550, 200, 250, '#7fb285', false);

    drawGrid(canvasWidth, canvasHeight);
}

function drawMonster(x, y, size, color, isSurprised) {
    fill(color);
    stroke(0);
    strokeWeight(2);
    
    // Draw the face (big square)
    rect(x, y, size, size);

    let eyeSize = size * 0.2; // Size of the eyes
    let eyeOffset = size * 0.3; // Distance of eyes from center

    // Draw square eyes
    fill('white');
    rect(x - eyeOffset, y - eyeOffset, eyeSize, eyeSize);
    rect(x + eyeOffset, y - eyeOffset, eyeSize, eyeSize);
    
    fill('black');
    rect(x - eyeOffset, y - eyeOffset, eyeSize * 0.5, eyeSize * 0.5);
    rect(x + eyeOffset, y - eyeOffset, eyeSize * 0.5, eyeSize * 0.5);

    // Draw mouth
    fill('black');
    if (isSurprised) {
        rect(x, y + size * 0.2, size * 0.2, size * 0.2);
    } else {
        rect(x, y + size * 0.3, size * 0.4, size * 0.1);
    }
}