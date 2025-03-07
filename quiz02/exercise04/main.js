function showFox() {
    updateImageAndLabel('images/fox.jpg', 'Fox');
}

function showLion() {
    updateImageAndLabel('images/lion.jpg', 'Lion');
}

function showTiger() {
    updateImageAndLabel('images/tiger.png', 'Tiger');
}

function showZebra() {
    updateImageAndLabel('images/zebra.jpg', 'Zebra');
}

// Helper function to update image and label
function updateImageAndLabel(imageSrc, labelText) {
    const imgElement = document.querySelector('.card img');
    const pElement = document.querySelector('.card p');

    imgElement.src = imageSrc;
    pElement.textContent = labelText;
}

// Attach event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");
    
    buttons[0].addEventListener("click", showFox);
    buttons[1].addEventListener("click", showLion);
    buttons[2].addEventListener("click", showTiger);
    buttons[3].addEventListener("click", showZebra);
});

