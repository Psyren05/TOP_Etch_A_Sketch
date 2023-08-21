// make grid
// mouse over event
// change color
// change grid size

const sketchpad = document.getElementById('sketchpad');
const clearBtn = document.getElementById('clear-btn');

function createGrid(size) {
    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < size * size; i++ ){
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        sketchpad.appendChild(gridCell);

        gridCell.addEventListener('mouseover', () => {
            gridCell.style.backgroundColor = '#333';
        })
        
    }
}

function clearGrid() {
    clearBtn.addEventListener('click', () => {
        sketchpad.innerText = '';
    })
}

createGrid(4);



