//Exercise 1 
//Evan Soucy
//setting up the values 
let x;
let speedX;
let y;
let speedY;

function setup() {
  createCanvas(400, 400);
  x=random (400)
  y=random (400)
  speedX=random (10)
  speedY=random (10)
  
}

function draw() {
  background(220);
  x = x + speedX;
  y = y + speedY;

  drawFrog(x, y, 0.14);
  if (x > 355||x< -10) {
    speedX = speedX * -1; //controls the X variables so once it hits a wall it will bounce off 
  }
 
  if (y > 350 || y < -10) {
    speedY = speedY * -1; //controls the Y variables so once it hits a wall it will bounce off 
  }
 
}

function drawFrog(x, y, size) {
  push();
  translate(x, y);
  scale(size);
  fill("darkolivegreen");
  ellipse(110, 300, 50, 135); //left back leg
  ellipse(290, 300, 50, 135); // right back leg
  fill("darkolivegreen");
  ellipse(200, 285, 200, 150); //body
  ellipse(200, 200, 200, 100); //head
  fill("black");
  ellipse(150, 160, 50, 50); //left eye
  ellipse(250, 160, 50, 50); //right eye
  fill("white");
  ellipse(200, 225, 100, 25); //mouth
  fill("darkolivegreen");
  ellipse(160, 340, 50, 75);
  ellipse(240, 340, 50, 75);
  pop();
}
