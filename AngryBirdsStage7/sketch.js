const Engine = Matter.Engine;
const World= Matter.World;

const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(1000,190,70,70);




    box3 = new Box(998,190,70,70);
    box4 = new Box(1000,190,70,70);
    pig3 = new Pig(600, 140);


    box5 = new Box(998,190,70,70);
    
    log4 = new Log(1000,200,300,10);
    log5 = new Log(600,150,200,10);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}
function preload (){
    getTime();
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    textSize(18);
    text("pig is sleeping dont wake him up  and destroy the house",600,300);
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    
    ground.display();


    box3.display();
    box4.display();
    pig3.display();
    

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();
      
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJson = await response.json();
var datetime = responseJson.datetime;
var hour = datetime.slice(11,13);
console.log(hour);
if(hour >= 06 && hour <= 19 ){
    bg="sprites/bg.png"
    
}else{
    bg="sprites/bg2.jpg"
}
backgroundImg=loadImage(bg)

}