const sketchpad = document.getElementById('sketchpad');
const blackBtn = document.getElementById('black-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const pickAColorBtn = document.getElementById('pick-btn');
const eraserBtn = document.getElementById('eraser-btn');
const clearBtn = document.getElementById('clear-btn');
const gridSlider = document.getElementById('grid-Slider');

const blackModeClicked = blackBtn.addEventListener('click', () => {
    blackBtn.classList.toggle('blackModeClicked')
});
const rainbowModeClicked = rainbowBtn.addEventListener('click', () => {
    rainbowBtn.classList.toggle('rainbowModeClicked')
});
const pickAColorModeClicked = pickAColorBtn.addEventListener('click', () => {
    pickAColorBtn.classList.toggle('pickAColorModeClicked')
});
const eraserClicked = eraserBtn.addEventListener('click', () => {
    eraserBtn.classList.toggle('eraserClicked')
});
const clearClicked = clearBtn.addEventListener('click', () => {
    clearBtn.classList.toggle('clearClicked')
});


function createGrid(size) {
    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < size * size; i++ ){
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        sketchpad.appendChild(gridCell);

        gridCell.addEventListener('mouseover', changeColor);
    }  
}

function changeColor(event) {
    
    event.target.classList.add('blackMode');
}

createGrid(12);

// create a function that toggles between colors

// You're going to need an input to pick and keep track of the current color. 
// And then use that color when you do your 
// gridCell.style.backgroundColor = .... That answers your context.
// To answer your question though, you can use the classList you added to 
// each grid cell to target/get access to them