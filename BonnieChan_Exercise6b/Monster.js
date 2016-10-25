function Monster() {
 this.position = createVector(0, 0);
 this.velocity = createVector(2,2);
 this.acceleration = createVector(0.01);


 this.update = function() {
  this.position.add(this.velocity);
  this.velocity.add(this.acceleration);
  
 };

this.bounce = function(){
 if (this.position.y > height) {
  this.position.y = random(height);
 }
 if ( this.position.x > width) {
  this.position.x = random(width);
 }
}


 this.display = function() {

  stroke(0);
  strokeWeight(3);
  fill(0, 255, 0);
  rect(this.position.x + 110, this.position.y + 40 , 50,150);
  rect(this.position.x + 210, this.position.y + 40, 50,150);

  //Monster Trapezoid Arms and pink color fill

  fill(255, 25, 128);
  quad(this.position.x, this.position.y - 25, this.position.x + 85, this.position.y - 25, this.position.x + 110, this.position.y + 10,this.position.x - 25, this.position.y + 10);
  quad(this.position.x + 290, this.position.y - 25, this.position.x + 375, this.position.y - 25, this.position.x + 400, this.position.y + 10,this.position.x + 275, this.position.y + 10);


  /*
  Body of the monster is centered on the screen
  The body is a quad polygon
  With Outline thickness of 3 and filled with the color red
  */

  fill(255, 0, 0);
  quad(this.position.x + 100, this.position.y - 100, this.position.x + 250, this.position.y - 100,this.position.x + 300, this.position.y + 50, this.position.x + 100, this.position.y + 100);


  //Horns on the monster head using triangles
  //NOTE: Learn to type in coordinates without guessing the point location...
  fill(0, 0, 255);
  triangle(this.position.x + 70, this.position.y - 150, this.position.x + 50, this.position.y - 225, this.position.x + 150, this.position.y -150);
  fill(0, 0, 255);
  triangle(this.position.x + 125, this.position.y - 225, this.position.x + 125, this.position.y - 280, this.position.x + 170, this.position.y - 225);

  //Monsters teeth using triangles and for loops instead
  //Basically the coordinates for x is adding 10 pixels for each teeth and the y coordinate stays the same 
  for (var x = this.position.x + 170; x <= this.position.x + 270; x += 10) {
   fill(255);
   triangle(x, this.position.y - 125, x + 10, this.position.y - 165, x + 15,this.position.y - 135);
  }


  //Top or sideway part of monster teeth using for loops instead
  for (var y = this.position.y - 247; y <= this.position.y - 175; y += 10) {
   fill(255);
   triangle(this.position.x + 170, y, this.position.x + 190, y + 10, this.position.x + 170, y + 20);


  }

  //Monster's Tongue
  fill(255, 102, 93);
  quad(this.position.x + 150, this.position.y - 150, this.position.x + 300, this.position.y - 220, this.position.x + 290, this.position.y - 210, this.position.x + 150, this.position.y - 140);

  //Monster's Head
  //Shape of Pacman (switched the code from PI+QUARTER_PI to PI+HALF_PI)
  //Orange Fill for the head

  fill(255, 167, 24);
  arc(this.position.x + 175, this.position.y - 150, 225,  200, 0, PI + HALF_PI, PIE);

  //Monster Eye; black circle

  fill(255);
  ellipse(this.position.x + 155, this.position.y - 200, 30, 20);

  //pupil
  fill(0);
  ellipse(this.position.x + 155, this.position.y - 200, 9, 9);


  //Monster fingers; triangles function

  fill(255);
  triangle(this.position.x - 80, this.position.y - 40, this.position.x - 60, this.position.y - 45, this.position.x - 60, this.position.y - 25);
  triangle(this.position.x - 80, this.position.y - 15, this.position.x - 60, this.position.y - 25, this.position.x - 55, this.position.y - 5);
  triangle(this.position.x - 70, this.position.y + 15, this.position.x - 55, this.position.y - 5, this.position.x - 35, this.position.y + 5);

  triangle(this.position.x + 370, this.position.y - 45, this.position.x + 400, this.position.y - 60, this.position.x + 390, this.position.y - 25);
  triangle(this.position.x + 390, this.position.y - 35, this.position.x + 420, this.position.y - 55, this.position.x + 410, this.position.y - 18);
  triangle(this.position.x + 410, this.position.y - 25, this.position.x + 440, this.position.y - 51, this.position.x + 425, this.position.y - 5);



  //Monster Hands; half circle with yellow color fill

  fill(255, 241, 48);
  arc(this.position.x - 25, this.position.y - 25, 75, 75, 0, PI + QUARTER_PI, CHORD);
  arc(this.position.x + 400, this.position.y - 25, 75, 75, 0, PI + QUARTER_PI, CHORD);



  //Monster Feet; ellipse function

  fill(162, 98, 255);
  ellipse(this.position.x + 140, this.position.y + 190, 70, 30);
  ellipse(this.position.x + 240, this.position.y + 190, 70, 30);

  //toe lines using line function
  line(this.position.x + 150, this.position.y + 180, this.position.x + 160, this.position.y + 179);
  line(this.position.x + 155, this.position.y + 185, this.position.x + 170, this.position.y + 184);
  line(this.position.x + 160, this.position.y + 191, this.position.x + 175, this.position.y + 189);
  //toe lines for the right foot
  line(this.position.x + 250,this.position.y + 180, this.position.x + 260, this.position.y + 179);
  line(this.position.x + 255, this.position.y + 185,this.position.x + 270, this.position.y + 184);
  line(this.position.x + 260, this.position.y + 191, this.position.x + 275, this.position.y + 189);
 }
}