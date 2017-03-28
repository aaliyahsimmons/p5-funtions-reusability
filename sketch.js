

function setup(){
    createCanvas(600,400);
    background(50);
}

function draw(){
    flower(300,200);
    flower(100,300);
    flower(200,300);
    flower(300,300);
    flower(400,300);
    flower(500,300);
    
    if(mouseIsPressed){
      flower(mouseX,mouseY);
    }
    
}

function flower(x,y){
  //stem
    fill(66,241,244);
    rect(x-5,y,10,100); 
  
  //petals
  noStroke();
  fill(128,66,244);
  ellipse(x+10,y-10,35,35);
  ellipse(x+10,y+10,35,35);
  ellipse(x-10,y-10,35,35);
  ellipse(x-10,y+10,35,35);
  
   
  //bulb
    fill(244,235,66);
    ellipse(x,y,25,25);
    
}