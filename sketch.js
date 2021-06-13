
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5
var roofObj
var chain1,chain2,chain3,chain4,chain5
var world;

function preload()
{

}

function setup() {
	createCanvas(800, 700)
	engine = Engine.create();
	world = engine.world;

  bob1 = new bob(350,400,50)
  bob2 = new bob(400,400,50)
  bob3 = new bob(450,400,50)
  bob4 = new bob(500,400,50)
  bob5 = new bob(550,400,50)
  chain1 = new chain(bob1.body,{x:350,y:100})
  chain2 = new chain(bob2.body,{x:400,y:100})
  chain3 = new chain(bob3.body,{x:450, y:100})
  chain4 = new chain(bob4.body,{x:500, y:100})
  chain5 = new chain(bob5.body,{x:550, y:100})
	roofObj = new roof(450,100,300,20);


	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofObj.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-30,y:155})
  }
}


