var angle;
function setup(){
    createCanvas(400, 400);

    angleMode(DEGREES)

    angle = 0;
}

function draw(){
    background(255);

    push();
    translate(100, 100);
    rotate(angle);

    rect(0, 0, 20, 20);
    pop();

    angle++;

    fill("blue");
    text(mouseX, 10, 15);
    text(mouseY, 30, 15);
}