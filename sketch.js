var rec1, rec2
var edges


function setup() {
  createCanvas(800,400);
  rec1=createSprite(400, 200, 50, 50);
  rec2=createSprite(100, 300, 50, 50);

  edges=createEdgeSprites ()

  rec1.shapeColor="Green"
  rec2.shapeColor="Green"
  rec1.velocityX=4
  rec1.velocityY=4
  //rec2.velocityX=-4
  //rec2.velocityY=-4
}

function draw() {
  background(0,0,0);  
  
  rec2.x=mouseX
  rec2.y=mouseY

  rec2.bounceOff(rec1)
  rec1.bounceOff(rec2)
  rec1.bounceOff(edges)
  rec2.bounceOff(edges)
   if (rec2.x-rec1.x<=rec1.width/2+rec2.width/2 && rec1.x-rec2.x<=rec1.width/2+rec2.width/2 && rec2.y-rec1.y<=rec1.height/2+rec2.height/2 && rec1.y-rec2.y<=rec1.height/2+rec2.height/2)   {
    rec1.shapeColor="red"
    rec2.shapeColor="red"
    

  }
  else {
    rec1.shapeColor="Green"
    rec2.shapeColor="Green"

  }

  drawSprites();
}