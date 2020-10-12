
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;

var stoneObj;

function preload()
{
	
}

function setup() {
	var createCanvas=(1200, 600);
	engine = Engine.create();
    world = engine.world;



	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new ground(600,height,1200,20);

	stoneObj = new stone(200,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  stoneObj.display();
 
}



