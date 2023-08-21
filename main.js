// make grid
// mouse over event
// change color
// change grid size

const sketchpad = document.getElementById('sketchpad');
const blackBtn = document.getElementById('black-btn');
const rainbowBtn = document.getElementById('rainbow-btn');
const pickAColorBtn = document.getElementById('pick-btn');
const eraserBtn = document.getElementById('eraser-btn');
const clearBtn = document.getElementById('clear-btn');
const gridSlider = document.getElementById('grid-Slider');


function createGrid(size) {
    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < size * size; i++ ){
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        sketchpad.appendChild(gridCell);

        sketchpad.addEventListener('mouseover', changeColor);
    }  
}

// create a function that toggles between colors

// You're going to need an input to pick and keep track of the current color. 
// And then use that color when you do your 
// gridCell.style.backgroundColor = .... That answers your context.
// To answer your question though, you can use the classList you added to 
// each grid cell to target/get access to them

function changeColor() {
    // if blackbtn is clicked, change pen color to black
    const blackBtnClicked = blackBtn.addEventListener('click', () => {
        gridCell.addEventListener('mouseover', () => {
            gridCell.style.backgroundColor = '#333';
        })
    })
}


createGrid(12);

