var bullet,wall;
var speed,weight,;
var thickness;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,50,5);
  bullet.velocityx = speed;
  speed = random (55,90);
  weight = random (400,1500);
  weight = random (22,83);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color("white");
  bullet.shapeColor=color("white");
}

function draw() {
  background(0); 
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityx = 0;
  var deformation = 0.5 * weight * speed *speed/22509;
  if(deformation>180){
  bullet.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100)
  {
  bullet.shapeColor = color(230,230,0);
  }
  if(deformation<100){
  bullet.shapeColor = color(0,255,0);
  }
  }

  
  drawSprites();
}