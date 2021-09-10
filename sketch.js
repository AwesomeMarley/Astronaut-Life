var bg, sleep, brush, gym, eat, bath, move;
var backdrop;
var astronaut
var topEdge, bottomEdge, leftEdge, rightEdge;

function preload(){
  bg = loadImage("iss.png");
  sleep = loadAnimation("sleep.png");
  brush = loadAnimation("brush.png");
  gym = loadAnimation("gym1.png","gym2.png");
  eat = loadAnimation("eat1.png","eat2.png");
  bath = loadAnimation("bath1.png","bath2.png");
  move = loadAnimation("move2.png","move1.png");


}

function setup() {
  createCanvas(600, 400);

  backdrop = createSprite(300,200);
  backdrop.addImage("background", bg);
  backdrop.scale = 0.14;

  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;

  topEdge = createSprite(200,-40,800,20);
  topEdge.visible = false;
  bottomEdge = createSprite(200,460,800,20);
  bottomEdge.visible = false;
  leftEdge = createSprite(-40,200,20,800);
  leftEdge.visible = false;
  rightEdge = createSprite(640,200,20,800);
  rightEdge.visible = false;

}

function draw() {
  background(220);

  createEdgeSprites();

  astronaut.bounceOff(topEdge);
  astronaut.bounceOff(bottomEdge);
  astronaut.bounceOff(leftEdge);
  astronaut.bounceOff(rightEdge);

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.x = 300;
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
    astronaut.velocityX = -1;
    astronaut.velocityY = -1;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing",bath);
    astronaut.changeAnimation("bathing");
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving",move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = -1;
  }


  drawSprites();

  fill(255);
  textSize(20);
  text("Instructions:",10,40);
  textSize(10);
  text("Up Arrow = Brushing",10,55);
  text("Down Arrow = Gymming",10,65);
  text("Left Arrow = Eating",10,75);
  text("Right  = Bathing",10,85);
  text("m Key = Moving",10,95);
}