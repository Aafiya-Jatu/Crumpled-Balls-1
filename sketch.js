
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground;
var d1,d2,d3;


function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	//to create the paper
	
	d1 = new Dustbin(1000,670,170,20);
	d2 = new Dustbin(905,620,20,120);
	d3 = new Dustbin(1095,620,20,120);

	ground = new Ground(600,690,2000,20);

	paper = new Paper(100,300,25);

	//Engine.run(engine);
  
}
function draw() {
  background(0);

  Engine.update(engine);

  d1.display();
  d2.display();
  d3.display();

  ground.display();

  paper.display();

  
  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:185,y:-90});
	}

	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:-185,y:-90});
	}
}



