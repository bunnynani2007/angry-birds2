var fixed, moving, r1, r2;
function setup() {
  createCanvas(800,400);
  fixed=createSprite(100, 100, 50, 50);
  moving=createSprite(300,250,100,50)
  r1=createSprite(200,100, 50,50);
  r2=createSprite(300,100, 50,50);
 
}

function draw() {
  background("black");
  moving.x=World.mouseX;
  moving.y=World.mouseY;
  touching(fixed, moving);
  touching(r1, moving);
  touching(r2, moving);

  drawSprites();
}

function touching(m1, m2){
  if(m2.x-m1.x <= m2.width/2+m1.width/2 && (m1.x-m2.x <= m1.width/2+m2.width/2) &&
   ((m2.y-m1.y <= m2.height/2+m1.height/2 && (m1.y-m2.y <= m1.height/2+m2.height/2)))){
    m2.shapeColor="red";
    console.log(m2.x-m1.x);
    console.log(m2.width/2+m1.width/2);
  }
  else{
m2.shapeColor="grey";

  }
}