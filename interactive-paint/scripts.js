let paintcanvas = document.getElementById("canvas1");
let context = paintcanvas.getContext("2d");
let color = 'black';
let radius = 50;
// only paint if mouse is  being dragged (moved while the button is pressed)
let isPainting = false;

function setWidth (value) {
    if (isNumeric(value)) {
        paintcanvas.width = value;
    }
}

function setHeight (value) {
    if (isNumeric(value)) {
        paintcanvas.height = value;
    }
}

function startPaint () {
    isPainting = true;
}

function endPaint () {
    isPainting = false;
}

function doPaint (x, y) {
    if (isPainting) {
        paintCircle(x, y);
    }
}

function changeColor (newColor) {
    color = newColor;
}

function resizeBush (newSize) {
    radius = newSize
    document.getElementById("sizeOutput").value = newSize;
}

function clearCanvas () {
    context.clearRect(0, 0, paintcanvas.width, paintcanvas.height);
}

function paintCircle (x, y) {
    // make sure to start a new circle each time
    context.beginPath();
    // draw circle using a complete (2*PI) arc around given point
    context.arc(x, y, radius, 0, Math.PI * 2, true);
    context.fillStyle = color;
    context.fill();
}
// verify the given value is actually a number
function isNumeric (value) {
    // standard JavaScript function to determine whether a string is an illegal number (Not-a-Number)
    return !isNaN(value);
}
