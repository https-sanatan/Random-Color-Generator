let heading = document.querySelector('h1');
let displayRGB = document.querySelector('h2');
let clickBtn = document.querySelector('#click-btn');

function changeBackground() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    //get Random RGB Color
    let rgbValue = `rgb(${r}, ${g}, ${b})`;
    document.body.style.backgroundColor = rgbValue;
    displayRGB.innerText = `👉 RGB value (${r}, ${g}, ${b})`;

    //for text color logic
    let brightness = (r * 299 + g * 587 + b * 114) / 1000;
    if (brightness > 125) {
        heading.style.color = "black";
        displayRGB.style.color = "black";
    }
    else {
        heading.style.color = "white";
        displayRGB.style.color = "white";
    }
}

/* Button click */
clickBtn.addEventListener('click', changeBackground);

/* Enter key press */
document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        changeBackground();
    }
});
