var label1="change label";
var label2="other label";

function printMessage(){
    alert("warning")
}

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
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
    context.fillRect(10, 10, 50, 50);
}

// TODO: create new button. when the button is clicked,  draw lines into canvas
// e.g. (100, 100) -> (150, 150)
function drawLines() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(200, 100);
    context.closePath();
    context.stroke();
}

// TODO: create new button. when the button is clicked,  draw splines into canvas
// e.g. (100, 100)  (100, 110) (100, 120) (150, 150) ....
function drawSplines() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(100, 100);
    context.quadraticCurveTo(50, 90, 100, 110);
    context.quadraticCurveTo(40, 10, 100, 120);
    context.quadraticCurveTo(20, 80, 150, 150);
    context.stroke();
}

// TODO: create new button. when the button is clicked, clear what is drawn on the canvas.
function clearCanvas() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.height, canvas.width);
}

// TODO: when mouse is clicked, get mouse position and show it on the page.
function printMousePosition() {
        if (!event) { event = window.event; }
        var hx, hy;
        if (document.all) { // for IE
                hx = event.offsetX;
                hy = event.offsetY;
        } else {
                hx = event.layerX;
                hy = event.layerY;
        }
        alert("x:"+hx+",y:"+hy);
        // return [hx,hy];
}

// TODO: in order to paint, figure out what event to process 

// TODO: implement paint method
function paint() {
}

// TODO: refactor
