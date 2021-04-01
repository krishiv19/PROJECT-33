const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var backgroundimg;
var maxSnow=150;
var snowfall = [];

function preload() {
  backgroundImg = loadImage("snow3.jpg");
}


function setup() {
  createCanvas(900,800);

 engine = Engine.create();
 world = engine.world;

 for(var i=0; i<maxSnow; i++){
  snowfall.push(new Snow(random(0,900) , random(0,900)));
}
}

function draw() {
  Engine.update(engine);

  background(backgroundImg); 

  for(var i = 0; i<maxSnow; i++){
    snowfall[i].display();
    snowfall[i].update();
}

  drawSprites();
}