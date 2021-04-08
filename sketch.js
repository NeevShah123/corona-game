var Boy, mask, sanitizer, virus, runningboy, ground, bg;
var boyimg, maskimg, sanitizerimg, virusimg, runningboyimg, bgimg;
var masksGroup, sanitizersGroup, virusGroup;
var Play = 1;
var End = 0;
var gameState = Play;
var score = 0;

function preload(){
Boyimg = loadImage("Sprites/Boy.png");
runningboyimg = loadImage("Sprites/boygif.png");
bgimg = loadImage("Sprites/bg.png");
maskimg = loadImage("Sprites/mask.png");
sanitizerimg = loadImage("Sprites/sanitizer.png");
virusimg = loadImage("Sprites/corona.png");
}

function setup() {
  createCanvas(1500,700);
  ground = createSprite(750,675,1600,20);
  
bg = createSprite(600,400,1200,800);
bg.addImage(bgimg);
bg.scale = 7;

  Boy = createSprite(100,625,20,20);
  Boy.addImage(Boyimg);
  Boy.scale = 0.9;
  Boy.debug = false;
  Boy.setCollider ("rectangle",0,0,100,200);

masksGroup = new Group();
sanitizersGroup = new Group();
virusGroup = new Group();
  
}

function draw() {
  if(gameState===Play){
    //bgSound.play();
     bg.velocityX=-4 ;
 if(bg.x < 0){
 bg.x = bg.width/2;
 
 }
  background(255,255,255);  
ground.depth = Boy.depth + 1;
Boy.collide(ground);


if (keyDown ("space")){
  Boy.velocityY = -12;
  }
  
  Boy.velocityY = Boy.velocityY + 1;

  drawSprites();
  
  fill ("white")
  textSize(50);
  text("Score: " +score,1000,180);
}
}

function mask(){
  if(frameCount % 60 ===0){
    mask = createSprite(1500,Math.round(random(120,420)),20,20);
    mask.velocityX = -10 ;
    mask.addImage(maskimg);
    mask.scale=1;
    masksGroup.add (mask);
      }
}

function virus(){
  if(frameCount % 80 ===0){
    virus = createSprite(1500,Math.round(random(230,400)),20,20);
    virus.velocityX = -20;
    virus.addImage(rocketimg);
    virusGroup.add(rocket);
    virus.scale = 1.5;
    
    
      }
}

function sanitizer(){
  if(frameCount % 60 ===0){
    sanitizer = createSprite(1500,Math.round(random(120,420)),20,20);
    sanitizer.velocityX = -10 ;
    sanitizer.addImage(sanitizerimg);
    sanitizer.scale=1;
    sanitizersGroup.add (sanitizer);
      }
}