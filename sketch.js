var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(100,100,10,10);
}

function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x+5
  }
  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x-5
  }
  drawSprites();
}




