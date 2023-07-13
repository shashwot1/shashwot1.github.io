let canvas = document.querySelector("canvas");
let context = canvas.getContext("2d");

context.strokeStyle = "white";
context.beginPath();
for (let y = 50; y < 500; y += 50) {
    context.moveTo(50, y);
    context.lineTo(950, y);
}
for (let x = 50; x < 1000; x += 50) {
    context.moveTo(x, 50);
    context.lineTo(x, 450);
}
context.stroke();

let value = 50;
function circle() {
    context.strokeStyle = "red";
    context.lineWidth = 5;
    context.beginPath();
    context.arc(500, 250, value, 0, 2 * Math.PI);
    context.stroke();
}

function blue(){
    context.strokeStyle = "blue";
    context.lineWidth = 5;
    context.beginPath();
    context.arc(500, 250, value, 0, 2 * Math.PI);
    context.stroke();
}


