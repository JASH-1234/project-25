
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var dustbin12,dustbin2,dustbin3,dustbin4;
var ground1,paper1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    

	
	dustbin12 = new dustbin(640,620,150,130);
    // dustbin2 = new dustbin(570,645,20,100);
	// dustbin3 = new dustbin(710,645,20,100);
	paper1 = new paper(100,500,80);
	ground1 = new ground(350,690,900,20);
    dustbin2 = new dustwall(640,680,150,20);
    dustbin3 = new dustwall(570,645,20,100);
	dustbin4 = new dustwall(710,645,20,100);
	Engine.run(engine);
}


function draw() {
  
  background("red");
  Engine.update(engine);
  paper1.display();
  ground1.display();
  dustbin2.display(0);
  dustbin3.display(0);
  dustbin4.display(0);
 dustbin12.display();
//  dustbin2.display();
//  dustbin3.display();
 
 
 
 
}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:300,y:-530})

	}
}
