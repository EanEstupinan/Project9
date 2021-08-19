var box
function setup() {
  createCanvas(400,400);
  background(51)
  box=createSprite(200,200,20,20)
}

function draw() 
{
  if(keyIsDown(RIGHT_ARROW)){
    background("green")
  }
  if(keyIsDown(LEFT_ARROW)){
    background("orange")
  }
  if(keyIsDown(DOWN_ARROW)){
    background("yellow")
  }
  if(keyIsDown(UP_ARROW)){
    background("red")
  }
  drawSprites()

}




