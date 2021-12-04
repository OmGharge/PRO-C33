var bg;
var snow1,snowImg1;
var snow2,snowImg2;
var boy, boyImg;
var bgSound1;
var bgSound2;
function preload(){
  //loading the images
  bg = loadImage("snow3.jpg");
  snowImg1 = loadImage("snow4.webp");
  snowImg2 = loadImage("snow5.webp");
  bgSound1 = loadSound("Sound.mp3");
  bgSound2 = loadSound("Sound2.mp3")
  boyImg   = loadImage("boy in the snow.png")
    
  
}

function setup() {
  createCanvas(800,400);
  bgSound1.loop();
  boy = createSprite(750,250);
  boy.addImage('boy',boyImg);
  boy.scale = 0.8;
 

} 

function draw() {
  
  background(bg);

 if(keyCode === 37){
  boy.x =  boy.x -5
 }
 if(keyCode === 39){
  boy.x =  boy.x +5
 } 
 
if(boy.x>800){
  boy.x = 0
}
if(boy.x<0){
  boy.x = 800

}
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
/*function keyReleased() {
  if (value === 37) {
    boy.velocityX = 0;
  }
}
  */