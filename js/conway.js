const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const w = window.innerWidth - 50;
const h = window.innerHeight - 50;

canvas.width = w;
canvas.height = h;

const gridh = Math.floor(h / 50);
const gridw = Math.floor(w / 50);
let grid = new Array(gridh);
for (let i = 0; i < gridh; i++) {
    grid[i] = new Array(gridw).fill(false);
}

function drawGrid() {
    context.fillStyle = "#FFFFFF";

    for (let x = 0; x < canvas.width; x += 50) {
        context.moveTo(x, 0);
        context.lineTo(x, 50 * gridh);
    }

    for (let y = 0; y < canvas.height; y +=50) {
        context.moveTo(0, y);
        context.lineTo(50 * gridw, y);
    }

    context.stroke();
}

function flip(event) {
    let x = Math.floor((event.clientX - 10) / 50);
    let y = Math.floor((event.clientY - 30) / 50);
    grid[y][x] = !grid[y][x];
    fillGrid();
}

function fillGrid() {
    for (let i = 0; i < gridh; i++) {
        for (let j = 0; j < gridw; j++) {
            if (grid[i][j]) {
                context.fillStyle = "black";
                context.fillRect(j * 50, i * 50, 50, 50);
                context.stroke();
            } else {
                context.fillStyle = "white";
                context.fillRect(j * 50, i * 50, 50, 50);
                context.stroke();
            }
        }
    }
}

function countNeighbours(x, y) {
    let count = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            if (i === 0 && j === 0) {
                continue;
            }

            if (y + i >= 0 && x + j >= 0 && y + i < gridh && x + j < gridw) {
                count += grid[y + i][x + j];
            }
        }
    }

    return count;
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function playConway() {
    let newGrid = new Array(gridh);
    for (let i = 0; i < gridh; i++) {
        newGrid[i] = new Array(gridw).fill(false);
    }

    for (let i = 0; i < gridh; i++) {
        for (let j = 0; j < gridw; j++) {
            const neighbours = countNeighbours(j, i);
            if (grid[i][j] === true && (neighbours === 2 || neighbours === 3)) {
                newGrid[i][j] = true;
            } else if (grid[i][j] === false && neighbours === 3) {
                newGrid[i][j] = true;
            }
        }
    }

    grid = newGrid;
    fillGrid();
    console.log('sada');
    await delay(300);
    playConway();
}

drawGrid();