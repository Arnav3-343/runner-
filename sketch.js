var ground, invisibleGround;
var path,pathImg;
var man,man_running;
var left,right
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  man_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  man = createSprite(291,316,7,100);
  man.addAnimation("running",man_running);
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;
  left = createSprite(14,140,5,70);
  left.visible = false
  right = createSprite(375,152,5,70);
  right.visible = false
  edges = createEdgeSprites();
}

function draw() {
  background(0);
  if (keyIsDown(LEFT_ARROW)) 
  {
    man.velocityX = -5;
  }
  if (keyIsDown(RIGHT_ARROW)) 
  {
    man.velocityX = 5;
  }
  if (path.y > 400) {
    path.y = height/2;
    }
 
drawSprites();
}
