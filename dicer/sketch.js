
let dice = 20, nmbrDice = 1, result, diceIndex = 0;
let diceType =  [2,4,6,8,10,12,20,100];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  push();
  fill(255);
  textSize(height/8);
  textAlign(CENTER);
  text(nmbrDice + " d " + dice, width/2, height/ 8);
  text("Result :", width/2, 3  * height/8);
  push();
  rectMode(CENTER);
  stroke(255);
  strokeWeight(8);
  noFill();
  rect(width/2, 4.65 * height/8, width / 2, height / 8 );
  pop();
  text(result, width/2, 5  * height/8);
  pop();
  //button + - nmbrDice
  // +++++
  push();
  fill(0);
  stroke(255);
  strokeWeight(4);
  square(0, height/ 32, height/ 12);
  pop();
  push();
  fill(255);
  textSize(height/8);
  text("+", 4 , 80 );
  pop();
  // ----
  push();
  fill(0);
  stroke(255);
  strokeWeight(4);
  square(0, height/ 8, height/ 12);
  pop();
  push();
  fill(255);
  textSize(height/8);
  text("-", 14 , 140 );
  pop();
  // button + - dice
// +++++
push();
fill(0);
stroke(255);
strokeWeight(4);
square(width - height/ 12 , height/ 32, height/ 12);
pop();
push();
fill(255);
textSize(height/8);
text("+", width - height/ 12 + 4 , 80 );
pop();
// ----
push();
fill(0);
stroke(255);
strokeWeight(4);
square(width - height/ 12, height/ 8, height/ 12);
pop();
push();
fill(255);
textSize(height/8);
text("-", width - height/ 12 + 14 , 140 );
pop();
}

function mousePressed(){
  if (mouseX > (width/2) - (width/4) && mouseX < (width/2) + (width/4) && mouseY > (4.65 * height / 8) - (height/16) && mouseY < (4.65 * height/ 8) + (height/16) ){
    result = int(random(nmbrDice, nmbrDice * dice + 1 )); 
  }
  buttonNmbrDice();
  buttonDice();
}

function buttonNmbrDice(){
  if (mouseX > 0 && mouseX <  height/ 12 && mouseY > height/ 32 && mouseY < height/ 32 + height/ 12 ){
   nmbrDice ++;
   nmbrDice = constrain(nmbrDice,0, 100);
  }
  if (mouseX > 0 && mouseX <  height/ 12 && mouseY > height/ 8 && mouseY < height/ 8 + height/ 12 ){
   nmbrDice --;
   nmbrDice = constrain(nmbrDice,0, 100);
  }
}

function buttonDice(){
  if (mouseX > width - height/ 12 && mouseX <  width && mouseY > height/ 32 && mouseY < height/ 32 + height/ 12 ){
    diceIndex ++;
    diceIndex = constrain(diceIndex, 0, diceType.length - 1);
    dice = diceType[diceIndex];
    print(diceIndex, diceType[diceIndex]);
  }
  if (mouseX > width - height/ 12 && mouseX <  width && mouseY > height/ 8 && mouseY < height/ 8 + height/ 12 ){
    diceIndex --;
    diceIndex = constrain(diceIndex, 0, diceType.length - 1);
    dice = diceType[diceIndex];
    print(diceIndex, diceType[diceIndex]);
  }
}