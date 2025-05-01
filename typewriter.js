const textArray = ["Your reliable partner in managing and tracking software tests.", 
    "Set new standards with intuitive design.", 
    "Get started with Test Hub now!"];
let currentIndex = 0;
let currentText = '';
let letterIndex = 0;

function type() {
if (currentIndex === textArray.length) {
currentIndex = 0;
}

currentText = textArray[currentIndex];
letterIndex++;

document.getElementById('typewriter-text').innerHTML = currentText.slice(0, letterIndex);

if (letterIndex === currentText.length) {
currentIndex++;
letterIndex = 0;
setTimeout(type, 2000); 
} else {
setTimeout(type, 100);
}
}

window.onload = type;
