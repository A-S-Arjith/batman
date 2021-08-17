const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, man,manImg,thunderCreated;
var drop = [];
var maxDrops=150;

function preload() {
manImg = loadImage("images/Walking Frame/walking_1.png");
Img1 = loadImage("images/thunderbolt/1.png")
Img2 = loadImage("images/thunderbolt/2.png")
Img3 = loadImage("images/thunderbolt/3.png")
Img4 = loadImage("images/thunderbolt/4.png")

}

function setup() {
    var canvas = createCanvas(800, 800);
    engine = Engine.create();
    world = engine.world;
    if(frameCount%150===0){
        for (var i = 0; i < maxDrops; i++) {
            drop.push(new Drops(random(0, 800), random(0, 800)))
        }
    }
    var manoptions={
        'restitution':1.0,
        'friction':0.2,
        'density':1.0,
        isStatic: true
    }
    man=Bodies.circle(400,650,110,manoptions);
    World.add(world,man)
}


function draw() {
    background("black");
    Engine.update(engine);
    rand = Math.round(random(1,4))
    if(frameCount%80===0){
        thunderCreated = frameCount;
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1: thunder.addImage(Img1)
            break;
            case 2: thunder.addImage(Img2)
            break;            
            case 3: thunder.addImage(Img3)
            break;
            case 4: thunder.addImage(Img4)
            default: break;
        }
        thunder.scale = random(0.3,0.6);
        
    } 
    if (thunderCreated+10===frameCount&&thunder){
        thunder.destroy();
        }
    for(var i=0;i<maxDrops;i++){
        drop[i].display();
        drop[i].updateY();
    }
    imageMode(CENTER)
    image(manImg,man.position.x,man.position.y,300,300)
    drawSprites();
}

function thundaa(){
    
}