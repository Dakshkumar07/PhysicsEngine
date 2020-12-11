
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground, ball;


function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;
  
  var groud_options = {
    isStatic : true
  } 
  


  ground = Bodies.rectangle(200,380,400,20,groud_options);
  World.add(myworld,ground);

  var ball_option = {
    restitution : 1
  }
  ball = Bodies.circle(200,100,20,ball_option);
  World.add(myworld,ball);


  console.log(ground.position.x);




}

function draw() {
  background(0);  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

}