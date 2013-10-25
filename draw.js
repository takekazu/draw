function printMessage(){
    alert("•`‚¢‚½‚à‚Ì‚ðÁ‹Ž‚µ‚Ü‚·")
}

var label1="change label";
var label2="other label";


function changeLabel() {
    if (document.getElementById("change").value != label2) {
        document.getElementById("change").value = label2;
    } else {
        document.getElementById("change").value = label1;
    }
}

// TODO: create new button. when the button is clicked,  draw rectangle into canvas
// e.g. (10, 10) , (50, 50)
function drawRectangle() {
}

// TODO: create new button. when the button is clicked,  draw lines into canvas
// e.g. (10, 10) -> (10, 50)
function drawLines() {
}

// TODO: create new button. when the button is clicked,  draw splines into canvas
// e.g. (10, 10)  (10, 11) (10, 12) (15, 15) ....
function drawSplines() {
}

// TODO: create new button. when the button is clicked, clear what is drawn on the canvas.
function clearCanvas() {
}

// TODO: when mouse is clicked, get mouse position and show it on the page.
function printMousePosition() {
}

// TODO: in order to paint, figure out what event to process 

// TODO: implement paint method
function paint() {
}

// TODO: refactor


var cw = 400;
var ch = 300;

function drawRect(){
ctx.fillRect(30, 30, 50, 50);
}

