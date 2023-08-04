var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var lastPosX, lastPosY;
var color = "lightgreen"
var widhtLine = 5;

canvas.addEventListener("mousedown", myMouseDown)
function myMouseDown(e){
    mouseEvent = "mouseDown"
}
canvas.addEventListener("mouseup", myMouseUp)
function myMouseUp(e){
    mouseEvent = "mouseUp"
}
canvas.addEventListener("mouseleave", myMouseLeave)
function myMouseLeave(e){
    mouseEvent = "mouseLeave"
}
canvas.addEventListener("mousemove", myMouseMove)
function myMouseMove(e){
    posMouseX = e.clientX - canvas.offsetLeft;
    posMouseY = e.clientY- - canvas.offsetTop;

    if(mouseEvent == "mouseDown"){
        ctx.beginPath()
        ctx.strokeStyle = color;
        ctx.lineWidth = widhtLine;
        ctx.moveTo(lastPosX, lastPosY);
        ctx.lineTo(posMouseX, posMouseY);
        ctx.stroke()
    }
    lastPosX = posMouseX;
    lastPosY = posMouseY
}