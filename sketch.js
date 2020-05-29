const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;
var stand;
var ground;
//row1
var box1, box2, box3, box4, box5, box6, box7;

//row2
var box8, box9, box10, box11, box12, box13;

//row3
var box14, box15, box16, box17; 

//row4
var box18, box19;

//top
var box20;

//polygon
var polygon;

var slingShot;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  //createSprite(400, 200, 30, 30);
  stand = new Ground(400,300,250,20);

  ground = new Ground(400,390,800,20)

  //Row 1
  box1 = new Box(475,290,30,40);
  box2 = new Box(450,290,30,40);
  box3 = new Box(425,290,30,40);
  box4 = new Box(400,290,30,40);
  box5 = new Box(375,290,30,40);
  box6 = new Box(350,290,30,40);
  box7 = new Box(325,290,30,40);

  //Row 23
  box8 = new Box(472.5,240,30,40);
  box9 = new Box(442.5,240,30,40);
  box10 = new Box(412.5,240,30,40);
  box11 = new Box(382.5,240,30,40);
  box12 = new Box(362.5,240,30,40);
  box13 = new Box(332.5,240,30,40);

  //Row 3
  box14 = new Box(442.5,200,30,40);
  box15 = new Box(412.5,200,30,40);
  box16 = new Box(382.5,200,30,40);
  box17 = new Box(362.5,200,30,40);

  //row4
  box18 = new Box(412.5,150,30,40);
  box19 = new Box(382.5,150,30,40);

  //top 
  box20 = new Box(397.5,100,30,40);

  //polygon
  ball = new Shooter(100,200);

  slingShot = new SlingShot(ball.body,{x:100,y:200});




  


}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground.display();

 
  stand.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  //row2
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  //row3
  box14.display();
  box15.display();
  box16.display();
  box17.display();

  //row4
  box18.display();
  box19.display();

  //top
   box20.display();

   ball.display();

  slingShot.display();
  drawSprites();
}

function mouseDragged()
{
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
    slingShot.fly();
}

function keyPressed()
{
    if(keyCode === 32){
        slingShot.attach(ball.body);
    }
}

