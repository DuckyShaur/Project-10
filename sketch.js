var sea_img;
var ship_ani;
function preload(){
ship_ani = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-1.png");
ship_ani1 = loadAnimation("ship-3.png","ship-3.png","ship-4.png","ship-3.png");
sea_img = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200);
  sea.addImage("sea1",sea_img);
  sea.scale = .3
  ship = createSprite(130,150,30,30);
  ship.addAnimation("ship1",ship_ani); 
  ship.scale =.3
}

function draw() {
  background("blue");
  sea.velocityX = -4;
  if(sea.x < 0 ){
    sea.x = sea.width/8;
  }
  if(keyDown("space")){
    ship.addAnimation("ship1",ship_ani1);
  }
  drawSprites()
} 