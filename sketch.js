var oceanImg, ocean;
var coinImg, coin, coinGroup;
var climberImg, climber, climbersGroup;
var frog, frogImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score = 0;


function preload(){
  oceanImg = loadImage("water.jpg");
  coinImg = loadImage("coin.png");
  climberImg = loadImage("seaweed.png");
  frogImg = loadImage("frog.png");
  
}

function setup(){
  createCanvas(580,450);
  
  ocean = createSprite(300,300);
  ocean.addImage("ocean",oceanImg);
  
  frog = createSprite(200,200,50,50);
  frog.addImage("frog", frogImg); 
  frog.scale = 0.1;
   

  //create coin group and climber group
  coinGroup = new Group();
  climbersGroup = new Group();

  

}

function draw(){
  background(oceanImg);
  if(oceanImg.y > 300)
  {
    oceanImg.y = 150;
  }
  drawSprites();

  fill("Red");
  textSize(30);
  text("Score:  "+ score , 400 , 70);
  
 
  
  if(gameState === PLAY){
    if(keyDown(UP_ARROW))
  {
    frog.y= frog.y - 3;

  }else if(keyDown(LEFT_ARROW) )
  {
    frog.x = frog.x - 3;

  }else if(keyDown(RIGHT_ARROW) )
  {

    frog.x = frog.x + 3;

  }else {
    frog.y = frog.y + 3;
  }

  spawnCoin();

  if(frog.isTouching(coinGroup)){
    score = score + 5;
  }

  if(frog.y >= 430){
    gameState = END;
    text("game is over" , 150,200);
    coinGroup.distroyEach();
    climbersGroup.distroyEach();
    
    

  }

  }

}

//if(gameState === END){}
  


// create the coin and climber in the same function
function spawnCoin() {
  
  
  if (frameCount % 280 === 0) {
    var xPos = (Math.round(random(80,500)));
    var climber = createSprite(xPos,50,20,20);
    climber.addImage("climber", climberImg);
    climber.scale = 0.4;
    climber.velocityY = +3;
    climbersGroup.add(climber);
    climber.lifetime = 150;

    

    coin = createSprite(climber.x,20,20,20);
    coin.addImage("coin", coinImg);
    coin.scale = 0.09;
    coin.velocityY = +3;
    coinGroup.add(coin);
    coin.lifetime = 150;
    

    //make the x position of the coin and climber the same
   
  }
}

