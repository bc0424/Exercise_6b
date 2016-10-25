monster1 = new Monster();
//var monster = [];

function setup() {
  createCanvas (1000,1000);
 monster1 = new Monster();
 
}

function draw() {
   background( 255);

  monster1.update();
  monster1.display();
  monster1.bounce();
  

}