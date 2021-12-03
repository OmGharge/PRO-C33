var bg;
var snow1,snowImg1;
var snow2,snowImg2;
var bgSound1;
var bgSound2;
function preload(){
  //loading the images
  bg = loadImage("snow3.jpg");
  snowImg1 = loadImage("snow4.webp");
  snowImg2 = loadImage("snow5.webp");
  bgSound1 = loadSound("Sound.mp3");
  bgSound2 = loadSound("Sound2.mp3")
}

function setup() {
  createCanvas(800,400);
  //plays the background music
  bgSound1.loop();

} 

function draw() {
  
  background(bg); 
  
  // calling the functions
  spawnSnow1();
  spawnSnow2();

  drawSprites();
  
}

function spawnSnow1(){
  if(frameCount%20===0){

  //create snow sprite
  snow1 = createSprite(400,0);
  snow1.addImage("snow",snowImg1);
  snow1.x = Math.round(random(0,800));
  snow1.scale = 0.1;
  snow1.velocityY = 2.5;
       
  }


}
function spawnSnow2(){
  if(frameCount%20===0){

  //create snow sprite
  snow2 = createSprite(400,0);
  snow2.addImage("snow",snowImg2);
  snow2.x = Math.round(random(0,800));
  snow2.scale = 0.1;
  snow2.velocityY = 2.5;
 
       
  }


}
