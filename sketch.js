
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var tree;

function preload()
{
	
}

function setup() {
	createCanvas(1350, 650);


	engine = Engine.create();
	world = engine.world;

	g1=new Ground(620,630,1700,40)
	//tree=createSprite(1000,400,50,400)
	//tree.addImage("tree.png")
	t1=new Tree(1000,400,0,0);
	b1=new Boy(200,600,150,300);
	s1=new Stone(170,400,50,50);
	string1 = new string({x:200,y:400},s1.body)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("aqua");
  g1.display();
  t1.display();
  b1.display();
  s1.display();
  drawSprites();
 
}



