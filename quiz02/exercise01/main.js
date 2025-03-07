function color1() {
    document.getElementById("square1").style.backgroundColor = "red";
}

function color2() {
    document.getElementById("square2").style.backgroundColor = "red";
}

function color3() {
    document.getElementById("square3").style.backgroundColor = "blue";
}

function color4() {
    document.getElementById("square4").style.backgroundColor = "green";
}

function color5() {
    document.getElementById("square5").style.backgroundColor = "hotpink";
}

function color6() {
    document.getElementById("square6").style.backgroundColor = "purple";
}

document.getElementById("square1").addEventListener("click", color1);
document.getElementById("square2").addEventListener("click", color2);
document.getElementById("square3").addEventListener("click", color3);
document.getElementById("square4").addEventListener("click", color4);
document.getElementById("square5").addEventListener("click", color5);
document.getElementById("square6").addEventListener("click", color6);