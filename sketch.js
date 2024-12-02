//The setup function only happens once
var left=0;
var transparancy=0;
function setup() {
  createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(100,145,mouseY); //an RGB color for the canvas' background
  //circle
  strokeWeight(5);
  stroke(5,2,127) // an RGB color for the circle's border
  fill(25,25,13,100); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
 
  ellipse(random(width),random(height),50,50); // center of canvas, 20px dia
  fill(158, 133, mouseY);
  ellipse(100,100,left,50);
  textFont("helvetica");
  textSize('50');
  text('hello',250,250);
  strokeWeight(0);
  ellipse(mouseX, mouseY,100,mouseX);
  
}
function mousePressed(){
  if(left>=255){
left=0;
  }
  else{
  left=left+5;
}
  left=left+4;

}