const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World
const Body = Matter.Body

var engine, world
var drops = []

var thunderbolt

function preload(){
    thunderbolt = loadAnimation("images/thunderbolt/1.png", "images/thunderbolt/2.png", "images/thunderbolt/3.png", "images/thunderbolt/4.png")
}

function setup(){
   createCanvas(400, 800)
   engine = Engine.create()
   world = engine.world
   umbrella = new Umbrella(200, 400)
   
    
}

function draw(){
    Engine.update(engine)
    background(0)
    umbrella.display()
    if(frameCount % 10 === 0){
        drops.push(new Drop(Math.round(random(0, width)), 0))
    }
    for(var j = 0; j < drops.length; j++){
        drops[j].display()
    }
    animation(thunderbolt, width/2, -100)
}   

