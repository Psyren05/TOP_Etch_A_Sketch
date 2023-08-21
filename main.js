// make grid
// mouse over event
// change color
// change grid size

const sketchpad = document.getElementById('sketchpad');

function createGrid(size) {
    sketchpad.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchpad.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (i = 0; i < size * size; i++ ){
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        sketchpad.appendChild(gridCell);

        gridCell.addEventListener('mouseover', () => {
            gridCell.style.backgroundColor = 'black';
        })
        
    }
}

createGrid(8);



