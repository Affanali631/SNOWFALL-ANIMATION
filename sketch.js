const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var world,engine,ground,s1,s2,s3,s4,s5,s6,s7,s8,s9,s10
function preload(){
ground=loadImage("snow3.jpg");
}
function setup() {
  createCanvas(1200,800);
  engine = Engine.create();
    world = engine.world;

  s1=new Snow(Math.round(random(50,1150)),10,50,50);
  s2=new Snow(Math.round(random(50,1150)),20,100,100);
  s3=new Snow(Math.round(random(50,1150)),80,70,70);

  s4=new Snow(Math.round(random(50,1150)),50,50,50);
  s5=new Snow(Math.round(random(50,1150)),60,100,100);
  s6=new Snow(Math.round(random(50,1150)),30,70,70);

  s7=new Snow(Math.round(random(50,1150)),90,50,50);
  s8=new Snow(Math.round(random(50,1150)),10,100,100);
  s9=new Snow(Math.round(random(50,1150)),40,70,70);
  s10=new Snow(Math.round(random(50,1150)),30,150,150);
}

function draw() {
  background(ground);
  Engine.update(engine)
  s1.display();
  s2.display();
  s3.display();
  s4.display();
  s5.display();
  s6.display();
  s7.display();
  s8.display();
  s9.display();
  s10.display();
}