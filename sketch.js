
var veer,theif,bodygaurd;
var veerImage,bodygaurdImage,theifImage,BG;
var ground,groundImage,invisibleGround;

function preload(){

  veerImage = loadImage("veer running.gif");

theifImage = loadImage ("theif.gif")
bodygaurdImage = loadImage("bodygaurd.png");
BG = loadImage("Background.jpg");
groundImage = loadImage("ground.png")
}



function setup() {
  createCanvas(800,400);
 

  veer=createSprite(100,150,20,20);
  veer.addImage(veerImage);
  veer.scale=0.8




  bodygaurd=createSprite(200,200,20,20);
  bodygaurd.addImage(bodygaurdImage);
  bodygaurd.scale=0.5
bodygaurd.visible=false;

  ground = createSprite(200,250,400,20);
  ground.addImage(groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  invisibleGround = createSprite(100,260,2000,10);
  invisibleGround.visible = false

}

function draw() {
  background(BG);
  
   
  if (ground.x < 0){
    ground.x = ground.width/2;
  }

  if(keyDown("space")&& veer.y >= 100) {
    veer.velocityY = -12;
}

    //add gravity
    veer.velocityY = veer.velocityY + 0.8

    veer.collide(invisibleGround);

    if (frameCount % 100 === 0){
      var theif = createSprite(600,200 ,  Math.round(random(1,6)),20,20);
      theif.addImage(theifImage );
  theif.scale=0.5
      theif.velocityX = -6;
       }


  drawSprites();
}