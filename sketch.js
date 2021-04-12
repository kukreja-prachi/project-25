
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine , world , dustbin , paper , dustbinImg , paperImg

function preload()
{
   dustbinImg = loadImage("Images/PRO25_3.png");
}

function setup() {
	createCanvas(800, 400)

   engine = Engine.create();
   world = engine.world;
   Engine.run(engine);

	//Create the Bodies Here.
   dustbin1 = new Dustbin(600,390,200,20);
   dustbin2 = new Dustbin(710,350,20,100);
   dustbin3 = new Dustbin(510,350 , 20,100);
   dustbinImg.addImage(binImg);
   dustbinImg.scale = 0.45;
   paper  = new Paper(100 , 300 , 10 );
   ground = Bodies.rectangle(width/2 , 400 , width , 10 ,
    {  isStatic :true})
    World.add(world ,  ground);
   


	
   
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
 
}

function keyPressed() {
   if(keyCode === UP_ARROW){
      Matter.body.applyForce(paperObject.body , paperObject.body.position) , {    x:85, y:-85}
      
     
   }
}



