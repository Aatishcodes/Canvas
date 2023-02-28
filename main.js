var canvas = document.getElementById("Mycanvas");
var ctx = canvas.getContext("2d");
var color = "red";


ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 4;
ctx.arc(250, 250, 40, 0, 2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", mousedown)

function mousedown(e) {
    color = document.getElementById("color").value;
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    circle(mouse_x,mouse_y)
}

function circle(mouse_x,mouse_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = document.getElementById("linew").value;
    ctx.arc(mouse_x, mouse_y, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function Cleararea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

