var thickness,wall;
var bullet,speed,weight;


function setup() {
  createCanvas(1600, 400);

  speed=random(223,321);
  weight=random(30,52);


   

  

  bullet = createSprite(100,200,40,10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";
  


  thickness = random(30,90);
	wall=createSprite(1200,200,thickness, height/2);
  wall.shapeColor=color(80,80,80);
  wall.shapeColor = "black";

	
}


function draw() {
  background(220,225,100);
  
 hasCollided(bullet,wall);

  drawSprites();

  if(hasCollided(wall,bullet)){
    
    
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);
  
  if(damage > 10){
  
  wall.shapeColor =color(255,0,0);
 
  }
  
  if(damage < 10){
    wall.shapeColor = color(0,255,0);
    
  }
  
  } 
 
}

function hasCollided(bullet,wall){

  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;

  if(bulletRightEdge >= wallLeftEdge){
    bullet.velocityX = 0;
    return true
  }
  else {
    return false;
  }
}


