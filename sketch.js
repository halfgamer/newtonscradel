
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var ball1,ground,comlog,CHAIN,ball2,CHAIN2,comlog1,comlog2,ball3,CHAIN3,ball4,CHAIN4,comlog3,comlog4,ball5,CHAIN5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

ballopt={
	restitution:1,
}
	engine = Engine.create();
	world = engine.world;
	ball1= Bodies.circle(300,410,20,ballopt);
	World.add(world,ball1)
	ball2=Bodies.circle(240,410,20);
	World.add(world,ball2)
	
	ball3= Bodies.circle(350,410,20,ballopt)
	World.add(world,ball3)
	ball4=Bodies.circle(370,410,20,ballopt);
	World.add(world,ball4)
	ball5=Bodies.circle(520,410,20,ballopt)
	World.add(world,ball5)
	
	gropt={
		isStatic:true
	}
	ground=Bodies.rectangle(400,600,800,20,gropt)
	World.add(world,ground)
	console.log(ground)
	comlog=Bodies.rectangle(300,170,400,100,gropt)
	World.add(world,comlog)
	comlog1=Bodies.rectangle(240,170,400,20,gropt)
	World.add(world,comlog1)
	comlog2=Bodies.rectangle(350,170,400,20,gropt)
	comlog3=Bodies.rectangle(370,170,400,20,gropt)
	comlog4=Bodies.rectangle(425,170,400,20,gropt)
	CHAIN1= new Chain(comlog,ball1)
	CHAIN2= new Chain(comlog1,ball2)
	CHAIN3= new Chain(comlog2,ball3)
	CHAIN4=new Chain(comlog3,ball4)
	CHAIN5= new Chain(comlog4,ball5)
	
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipseMode(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,30,30);
  drawSprites();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  rect(comlog.position.x,comlog.position.y,400,20)
CHAIN1.display();
ellipse(ball2.position.x,ball2.position.y,30,30);
ellipse(ball3.position.x,ball3.position.y,30,30);
ellipse(ball4.position.x,ball4.position.y,30,30);
ellipse(ball5.position.x,ball5.position.y,30,30);
CHAIN2.display();
CHAIN3.display();
CHAIN4.display();
CHAIN5.display();
if (keyCode=== UP_ARROW){
//	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:5,y:-1})
}
  
 
}



