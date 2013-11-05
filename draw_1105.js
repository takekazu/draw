var label1="change label";
var label2="other label";
    
function printMessage(){
    alert("warning")
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
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.fillRect(10, 10, 50, 50);
}

// TODO: create new button. when the button is clicked,  draw lines into canvas
// e.g. (100, 100) -> (150, 150)
function drawLines() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    //context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(200, 100);
    //context.closePath();
    context.stroke();
}

// TODO: create new button. when the button is clicked,  draw splines into canvas
// e.g. (10, 10)  (10, 11) (10, 12) (15, 15) ....
function drawSplines() {
    var ctrl_pnts = [{x: 10, y: 10},{x: 100, y: 100},{x: 200, y: 100},{x: 150, y: 150}];
    var drawSmoothLine = function(surf, ctrl_points){
        var l = ctrl_points.length;
        switch (l){
        case 0:
        case 1: //no control points
            break;
        case 2: //line
            surf.beginPath();
            surf.moveTo(ctrl_points[0].x, ctrl_points[0].y);
            surf.lineTo(ctrl_points[1].x, ctrl_points[1].y);
            surf.stroke();
            break;
        case 3: //lets use the second point as the two middle control points
            surf.beginPath();
            surf.moveTo(ctrl_points[0].x, ctrl_points[0].y);
            surf.bezierCurveTo(ctrl_points[1].x, ctrl_points[1].y, ctrl_points[1].x, ctrl_points[1].y, ctrl_points[2].x, ctrl_points[2].y);
            surf.stroke();
            break;
        default: //lets draw a bezier with the first 4 points, and for the rest lets create a control point to keep the line smooth
            surf.beginPath();
            surf.moveTo(ctrl_points[0].x, ctrl_points[0].y);
            var pnt_a = ctrl_points[1], pnt_b = ctrl_points[2], pnt_end = ctrl_points[3];
            surf.bezierCurveTo(pnt_a.x, pnt_a.y, pnt_b.x, pnt_b.y, pnt_end.x, pnt_end.y);
            ctrl_points = ctrl_points.slice(0);
            l = ctrl_points.length;
            pnt_b = ctrl_points[2];
            var i = 5
            for (; i < l; i += 2){
                pnt_a = {x: pnt_end.x + (pnt_end.x - pnt_b.x), y: pnt_end.y + (pnt_end.y - pnt_b.y)};
                pnt_b = ctrl_points[i - 1];
                pnt_end = ctrl_points[i];
                surf.bezierCurveTo(pnt_a.x, pnt_a.y, pnt_b.x, pnt_b.y, pnt_end.x, pnt_end.y);
            }
            if (i == l){ //a last lonely point, lets use the calculated pnt_a as pnt_b
                pnt_a = {x: pnt_end.x + (pnt_end.x - pnt_b.x), y: pnt_end.y + (pnt_end.y - pnt_b.y)};
                pnt_b = pnt_a;
                pnt_end = ctrl_points[l - 1];
                surf.bezierCurveTo(pnt_a.x, pnt_a.y, pnt_b.x, pnt_b.y, pnt_end.x, pnt_end.y);
            }
            surf.stroke();
            break;
        }
    }
var canvas = document.getElementById('canvas');
if (canvas && canvas.getContext){
    var context = canvas.getContext('2d');
    context.strokeStyle = 'black';
    drawSmoothLine(context, ctrl_pnts);
    }
}

// TODO: create new button. when the button is clicked, clear what is drawn on the canvas.
function clearCanvas() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, 300, 400);
}

// TODO: when mouse is clicked, get mouse position and show it on the page.
function printMousePosition() {
}

// TODO: in order to paint, figure out what event to process 

// TODO: implement paint method
function paint() {
}

// TODO: refactor
