var fairy,fairyImg;
var star,starImg;
var bgImg,starBody,music;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function preload(){
   //preload the images here
   fairyImg= loadImage("images/fairy.png");
   starImg= loadImage("images/star.png");
   bgImg= loadImage("images/starnight.png");
   music= loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);

  music.play();

  fairy=createSprite(130,520);
  fairy.addImage("fairyflying",fairyImg);
  fairy.scale=0.2;

  star = createSprite(650,30);
  star.addImage(starImg);
  star.scale= 0.2;

  engine = Engine.create();
  world = engine.world;

  var options={
    restitution:0.5,
    isStatic:true
  }
  starBody = Bodies.circle(650,30,5,options);
  World.add(world,starBody);

  Engine.run(engine);
}


function draw() {
  background(bgImg);

  star.x= starBody.position.x
  star.y= starBody.position.y

  if(star.y>450 && starBody.position.y>450){
    Matter.Body.setStatic(starBody,true);
  }

drawSprites();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW){
     fairy.x = fairy.x+20;
  }

  if(keyCode === LEFT_ARROW){
    fairy.x = fairy.x-20;
 }

 if(keyCode === DOWN_ARROW){
  Matter.Body.setStatic(starBody,false);
}
}