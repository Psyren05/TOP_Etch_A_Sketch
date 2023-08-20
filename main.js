// make grid
// mouse over event
// change color
// change grid size

const sketchpad = document.getElementById('sketchpad');
const gridSlider = document.getElementById('grid-slider');
const sliderValue = document.getElementById('slider-value');

function createGrid(size) {
    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        sketchpad.appendChild(square);
    }

    sliderValue.textContent = `${size} x ${size}`;
}

createGrid(parseInt(gridSlider.value));

// Update the grid size when the slider value changes (this is causing problems; fix it)
gridSlider.addEventListener('input', (event) => {
    const newSize = parseInt(event.target.value);
    createGrid(newSize);
});

// changes cell color on mouse hover
function changeColor() {
    square.style.backgroundColor = 'pink'
}

square.addEventListener('mouseenter', changeColor);




