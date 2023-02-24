var pacman, pacmanImg;
var frame, bgImg;
var line1,line2,line3,line4,line5;
function preload(){
  bgImg = loadImage("assets/bg.jpg");
  pacmanImg =  loadAnimation("assets/opening_Pac-man.png", "assets/closing_Pac-man.png");
  
}
function setup() {
  createCanvas(windowWidth,windowHeight);

  frame = createSprite(width/2,height/2,width/2-10,height/2+300);
  
  pacman = createSprite(width/2,height/2 , 25, 25);
  pacman.addAnimation("Pacman",pacmanImg);
  pacman.scale = 0.3;
}

function draw() {
  background(bgImg);

  if (keyDown("left")) {
    pacman.x -= 5;
  }
  if (keyDown("right")) {
    pacman.x += 5;
  }
  if (keyDown("up")) {
    pacman.y -= 5;
  }
  if (keyDown("down")) {
    pacman.y += 5;
  }
 
  line1 = createSprite(500,500,100,20)
  line1.shapeColor = "red"

  line2 = createSprite(560,560,20,140)
  line2.shapeColor = "red"
  
  line3 = createSprite(442,460,20,500)
  line3.shapeColor = "red"

  line4 = createSprite(700,220,500,20)
  line4.shapeColor = "red"

  drawSprites();
}