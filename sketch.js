//variables for images and sprites for drawing in the canvas

var helicopterIMG , helicopterSprite , packageSprite , packageIMG;

//object varibles (helicopter , packageBody,red_landing)

var packageBody , ground , redLanding , redLanding2 , redLanding3;

//making a constant for our engines and world and bodies and body

const Engine = Matter.Engine;

const World  = Matter.World ;

const Bodies = Matter.Bodies;

const Body   = Matter.Body  ;

function preload()
{

//stoaring name in variables to add them to sprites

	helicopterIMG=loadImage("helicopter.png");

	   packageIMG=loadImage("package.png");
}

function setup() {

 //creating canvas and adding sprites

	createCanvas(800, 700);

	rectMode(CENTER);
	
 //creating package sprites and adding images

	packageSprite=createSprite(width/2,208, 10,10);

	packageSprite.addImage(packageIMG);

	packageSprite.scale=0.2;

 //making a helicopter sprite and applying images to it

	helicopterSprite=createSprite(width/2, 200, 10,10);

	helicopterSprite.addImage(helicopterIMG);

	helicopterSprite.scale=0.6;

//making a ground sprite and color to it
	groundSprite=createSprite(width/2, height-35, width,10);

	groundSprite.shapeColor=color(255);

// renaming the engine
	engine   =  Engine.create();

	world    =  engine.world;

//creating a red landing using a class

	redLanding= new red_landing(400,650,200,20);

	World.add(world, red_landing);

	redLanding2= new red_landing(300,620,20,100);

	redLanding3=new  red_landing(510,619,20,100)

	World.add(world,redLanding)
	
//adding physics to the pakage 
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2 , isStatic:false});

	World.add(world, packageBody);
	
//Create a Ground and adding to a group

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );

 	World.add(world, ground);

//making the engine run 
	 
	Engine.run(engine);
  
}

function draw() {

//drawing rectangle in center

  rectMode(CENTER);

//adding background...

  background(0);

//updaing the engine...

  Engine.update(engine);

//calling function called keypressed(when keyCodeDown===down_arrow is pressed the box is realeased)

  keyPressed();
  //displaying objects(redLanding1,red_landing2...etc)

  redLanding.display();

  redLanding2.display();

  redLanding3.display();

  drawSprites();

 
}

//function for key pressed for realising the package

function keyPressed() {

 if (keyCode === DOWN_ARROW) {

	packageSprite.x= packageBody.position.x 
	
	packageSprite.y= packageBody.position.y 
	
                       }

                               }