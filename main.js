const sketchpad = document.getElementById('sketchpad');
const blackBtn = document.getElementById('black-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const pickAColorBtn = document.getElementById('pick-btn');
const eraserBtn = document.getElementById('eraser-btn');
const resetBtn = document.getElementById('reset-btn');
const gridSlider = document.getElementById('grid-Slider');

let currentMode;

const blackModeClicked = blackBtn.addEventListener('click', () => {
    currentMode = 'blackMode';
});
const rainbowModeClicked = rainbowBtn.addEventListener('click', () => {
    currentMode = 'rainbowMode';
});
const pickAColorModeClicked = pickAColorBtn.addEventListener('click', () => {
    currentMode = 'pickAColorMode';
});
const eraserClicked = eraserBtn.addEventListener('click', () => {
    currentMode = 'eraserMode';
});
const resetClicked = resetBtn.addEventListener('click', () => {
    currentMode = 'resetMode';
    prompt('How many squares per side? (Max 100)')
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
    
    if (currentMode === 'blackMode') {
        event.target.style.backgroundColor = '#333';
    } else if (currentMode === 'rainbowMode') {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    } else if (currentMode === 'pickAColorMode') {
        event.target.style.backgroundColor = pickAColorBtn.value;
    } else if (currentMode === 'eraserMode') {
        event.target.style.backgroundColor = '#FFF';
    } else if (currentMode ==='resetMode') {
        
    }
}

createGrid(8);