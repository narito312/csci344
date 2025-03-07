const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight; 

function setup() {
    createCanvas(canvasWidth, canvasHeight);
    
    drawElmo(100, 100, 150, '#0bc9cd', true);   // nose drawn
    drawElmo(300, 200, 75, '#0bc9cd', false);   // no nose drawn
    drawElmo(100, 325, 100, '#8093f1', false);  // no nose drawn
    drawElmo(250, 375, 125, '#7fb285', true);   // nose drawn
    drawElmo(550, 200, 250, '#102e4a', true);   // nose drawn

    drawGrid(canvasWidth, canvasHeight);
}

function drawElmo(x, y, size, color, hasNose) {
    fill(color);
    stroke(0);
    strokeWeight(2);
    
    // Draw the face (big circle)
    ellipse(x, y, size, size);

    let eyeSize = size * 0.25; // Size of the eyes
    let eyeOffsetX = size * 0.2; // Horizontal offset of eyes
    let eyeOffsetY = size * 0.2; // Vertical offset of eyes

    // Draw white eyes
    fill('white');
    ellipse(x - eyeOffsetX, y - eyeOffsetY, eyeSize, eyeSize);
    ellipse(x + eyeOffsetX, y - eyeOffsetY, eyeSize, eyeSize);
    
    fill('black');
    ellipse(x - eyeOffsetX, y - eyeOffsetY, eyeSize * 0.5, eyeSize * 0.5);
    ellipse(x + eyeOffsetX, y - eyeOffsetY, eyeSize * 0.5, eyeSize * 0.5);

    // Draw mouth (black semicircle)
    fill('black');
    arc(x, y + size * 0.1, size * 0.6, size * 0.4, 0, PI, CHORD);

    // Draw nose if hasNose is true
    if (hasNose) {
        fill('#E96A3D'); // Elmo's orange-ish nose color
        ellipse(x, y, size * 0.2, size * 0.15);
    }
}
