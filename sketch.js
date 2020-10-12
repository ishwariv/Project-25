const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,dustbin1,ground1;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper();
	dustbin1 = new Dustbin(1200,650);
	ground1 = new Ground();

	Engine.run(engine);
  
}

function draw() {
	background(255);
  	rectMode(CENTER);
  
	paper1.display();
	ground1.display();
	dustbin1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:290,y:-290});
	}
}