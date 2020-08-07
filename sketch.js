var car;
var wall;
var speed;
var weight;

function setup(){
  createCanvas(1600,400);

  speed= random(40,90);
  weight= random(500,1900);

  wall= createSprite(1200,150,60,height/2);
  
  car= createSprite(0,200,50,50);
  car.shapeColor=color("purple");
  car.velocityX=speed;

  //console.log(car.velocityX);
}

function draw(){
 background("black");

 if(wall.x-car.x < (wall.width+car.width)/2){
    car.velocityX=0;
    var deformation= (0.5*speed*weight*speed)/22059;


    if(deformation>180){
      car.shapeColor=color("red");
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor=color("blue");
    }
    if(deformation < 100){
      car.shapeColor=color("green");
    }
 }

    drawSprites();
}