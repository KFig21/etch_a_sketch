const container = document.querySelector("#container");
const square = document.createElement('div');
const clearButton = document.querySelector("#clear");
const sizeInput = document.querySelector("#size");

// create grid

function createNewGrid () {
    let gridSize = document.getElementById("size").value;
    console.log(gridSize);
    container.style.cssText = `
        grid-template-rows: repeat(${gridSize}, 1fr);
        grid-template-columns: repeat(${gridSize}, 1fr);`
    let cells = gridSize * gridSize;
    for(i = 0; i < cells; i++){
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square); 
    }
}

// fill in cells
let fillColor = 'black'
let canvasColor = 'whitesmoke'

let sketch = document.querySelector("div");
sketch.addEventListener("mouseover", function(e){
    console.log(fillColor)
    e.target.style.backgroundColor = `${fillColor}`;
});

    // black 
    const blackButton = document.querySelector("#black");
    blackButton.addEventListener("click", black);

    function black () {
        fillColor = 'black';
    }

    // eraser 
    const eraserButton = document.querySelector("#eraser");
    eraserButton.addEventListener("click", eraser);

    function eraser () {
        fillColor = `${canvasColor}`;
    }

    // random 
    const randomButton = document.querySelector("#random");
    randomButton.addEventListener("click", random);

    function random () {
        fillColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }

    // random 
    const colorButton = document.querySelector("#color");
    const userColorPicker = document.querySelector('#input-color');
    userColorPicker.addEventListener("click", color);
    userColorPicker.addEventListener('change', color, false);
    userColorPicker.addEventListener('input', color, false);

    function color (event) {
        fillColor = event.target.value;
    }

// clear grid

clearButton.addEventListener("click", clearGrid);

function clearGrid () {
    const container = document.querySelector("#container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createNewGrid();
}

// change grid size

function changeGridSize(val) {
    gridSize = val; 
    console.log(gridSize);
    clearGrid();
}

createNewGrid();