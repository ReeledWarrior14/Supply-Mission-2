var Engine = Matter.Engine;
var Worlds = Matter.World;
var Bodies = Matter.Bodies;

var engine, world;

var ground, ground2;

var invisible;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;


  Engine.run(engine);

  ground = new GROUND(200, 380, 400, 20);

  box1 = new BOXES(200, 220, 20, 20);
  boxRemake = new HELI(200, 200, 100, 60);

  box2 = new BOXES2(200, 365, 50, 15);
  box3 = new BOXES2(170, 350, 10, 50);
  box4 = new BOXES2(230, 350, 10, 50);

  invisible = createSprite(200, 210, 20, 20);
  invisible.visible = false;

  ground2 = createSprite(200, 365, 400, 20);
  ground2.visible = false;
}

function draw() {
  background(220);  
  
  rectMode(CENTER);

    ground.display();

    drawSprites();

    box1.display();
    boxRemake.display();

    box1.Bodies3.position.y = invisible.y

    console.log(invisible.y, box1.Bodies3.position.y);

    if (keyWentDown('space')){
      invisible.velocityY = 5;
    }

    invisible.collide(ground2);

    push();
    fill('red');
    box2.display();
    box3.display();
    box4.display();
    pop();


    fill("blue");
    text(mouseX, 10, 15);
    text(mouseY, 30, 15);
}