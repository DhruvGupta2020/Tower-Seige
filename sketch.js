const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var polygon;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16
var PGround;
function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;
     polygon = new Polygon(100,350,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  polygon.display();
  
  
  drawSprites();
 
}